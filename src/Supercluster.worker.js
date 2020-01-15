import 'core-js/stable/symbol'
import 'core-js/stable/weak-map'

import Supercluster from 'supercluster'

import {getDistanceBetweenPoints, getHashOfString} from './utils'

let cluster = null
let lastLoadedFeatures = null
let childPointsIdsMap = {}
let clusterHashMap = {}
let clusterInstanceId = null

self.onmessage = ({data}) => {
  if (data.options.log) {
    console.group(data.action)
    console.time(data.action)
    console.log('workerdata', data)
  }

  switch (data.action) {
    case 'loadFeatures':
      loadFeatures(data.data, data.options)
      break
    case 'clusteringData':
      clusteringData(data.data, data.options)
      break
    case 'expansionZoom':
      expansionZoom(data.data)
      break
    case 'pointsInCluster':
      pointsInCluster(data.data)
      break
  }

  if (data.options.log) {
    console.timeEnd(data.action)
    console.groupEnd(data.action)
  }
}

function findNearestOrSamePoint({latlng, zoom, bbox, compositeId}) {
  const virtualBbox = bbox

  let prev = null
  let prevDist = null
  const nearFeatures = cluster.getClusters(virtualBbox, zoom)
  for (const feat of nearFeatures) {
    if (feat.properties.cluster) {
      // try find by composite id
      const clusterId = feat.properties.cluster_id
      const childIds = getChildPointsIds(clusterId)
      const calcCompId = getCompositeId(clusterId, childIds)

      if (calcCompId === compositeId) {
        return feat.id
      }

      // if search fail, get nearest point
      const distance = getDistanceBetweenPoints(
        feat.geometry.coordinates,
        [latlng.lng, latlng.lat]
      )

      if (prev === null) {
        prev = feat
      } else {
        if (distance < prevDist) {
          prev = feat
          prevDist = distance
        }
      }
    }
  }

  if (prev !== null) {
    return prev.id
  }

  return null
}

function getCurrentOnNearestClusterId({instanceId, clusterId, latlng, zoom, bbox, compositeId}) {
  // for prevent error no cluster with specific id if data reloaded
  // we search nearest cluster if instacnse was reloaded
  if (clusterInstanceId !== instanceId) {
    return findNearestOrSamePoint({latlng, zoom, bbox, compositeId})
  }
  return clusterId
}

function pointsInCluster({clusterId, instanceId, latlng, zoom, bbox, compositeId}) {
  const features = cluster.getLeaves(
    getCurrentOnNearestClusterId({instanceId, clusterId, latlng, zoom, bbox, compositeId}),
    Infinity
  )

  sendMessage('pointsInCluster', {
    features,
    clusterId
  })
}

function expansionZoom({clusterId, instanceId, latlng, zoom, bbox, compositeId}) {
  const zoomMapTo = cluster.getClusterExpansionZoom(
    getCurrentOnNearestClusterId({instanceId, clusterId, latlng, zoom, bbox, compositeId})
  )

  sendMessage('expansionZoom', {
    latlng,
    zoom: zoomMapTo,
    clusterId
  })
}

function sendMessage (action, data = {}) {
  data.action = action
  postMessage(data)
}

function clusteringData({keptPointIds = [], bbox, zoom}, {log, bboxIncreasePer, appendChildIdsToCluster, optimizeRedraw}) {
  if (!cluster) {
    sendMessage('clusteringData', {
      features: null
    })
    return
  }

  // зап  юг вост север
  const [w, s, e, n] = bbox

  let ewLen = (e - w) * bboxIncreasePer
  if (ewLen < 0) ewLen = ewLen * -1
  let nsLen = (n - s) * bboxIncreasePer
  if (nsLen < 0) nsLen = nsLen * -1

  const increasedBbox = [
    w - ewLen,
    s - nsLen,
    e + ewLen,
    n + nsLen
  ]

  const features = cluster.getClusters(increasedBbox, zoom)
  const hasKeptPoints = keptPointIds.length > 0
  const grabChild = appendChildIdsToCluster || optimizeRedraw

  const fLen = features.length
  const ids = []
  for (let i = 0; i < fLen; i++) {
    const clusterId = features[i].properties.cluster_id
    features[i].properties.composite_id = clusterId

    if (features[i].properties.cluster && grabChild === true) {
      const childIds = getChildPointsIds(clusterId)

      if (appendChildIdsToCluster === true) {
        features[i].properties.childIds = childIds
      }

      if (optimizeRedraw === true) {
        features[i].properties.composite_id = getCompositeId(clusterId, childIds)
      }

      if (hasKeptPoints === true) {
        for (const id of keptPointIds) {
          if (childIds.indexOf(id) > -1) {
            features[i].properties.point_count--
          }
        }
      }
    }

    if (features[i].properties.id) {
      ids.push(features[i].properties.id)
    }
  }

  if (grabChild) {
    for (const id of keptPointIds) {
      if (ids.indexOf(id) === -1 && lastLoadedFeatures) {
        // find point and return as feature
        const len = lastLoadedFeatures.length
        for (let i = 0; i < len; i++) {
          if (lastLoadedFeatures[i].properties.id === id) {
            features.push(lastLoadedFeatures[i])
            break
          }
        }
      }
    }
  }

  log && console.log('single markers ids', ids, 'keptPointIds', keptPointIds)

  sendMessage('clusteringData', {
    features,
    zoom,
    bbox
  })
}

function getChildPointsIds(clusterId) {
  if (childPointsIdsMap[clusterId]) {
    return childPointsIdsMap[clusterId]
  }

  const ids = []

  const stack = [clusterId]
  while (stack.length) {
    const id = stack.pop()
    const childs = cluster.getChildren(id)

    childs.forEach(children => {
      if (children.properties.cluster) {
        stack.push(children.properties.cluster_id)
      } else {
        ids.push(children.properties.id)
      }
    })
  }

  childPointsIdsMap[clusterId] = ids

  return childPointsIdsMap[clusterId]
}

function getCompositeId(clusterId, childIds) {
  if (clusterHashMap[clusterId]) {
    return clusterHashMap[clusterId]
  }

  clusterHashMap[clusterId] = getHashOfString(
    childIds.sort().join(';')
  ).toString()

  return clusterHashMap[clusterId]
}

function loadFeatures({features = []}, {supercluster}) {
  // converts string functions body from options to function
  if (supercluster.map) {
    supercluster.map = new Function('props', supercluster.map)
  } else {
    delete supercluster.map
  }
  if (supercluster.reduce) {
    supercluster.reduce = new Function('accumulated', 'props', supercluster.reduce)
  } else {
    delete supercluster.reduce
  }

  cluster = new Supercluster(supercluster)
  cluster.load(features)
  lastLoadedFeatures = features
  childPointsIdsMap = {}
  clusterHashMap = {}
  clusterInstanceId = +new Date()
  sendMessage('loadFeatures', {instanceId: clusterInstanceId})
}

