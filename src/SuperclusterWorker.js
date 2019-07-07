import Supercluster from 'supercluster'

let cluster = null
let lastLoadedFeatures = null
let childPointsIdsMap = {}
let clusterHashMap = {}

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

function pointsInCluster({clusterId}) {
  const features = cluster.getLeaves(clusterId, Infinity)

  sendMessage('pointsInCluster', {
    features,
    clusterId
  })
}

function expansionZoom({clusterId, latlng}) {
  const zoom = cluster.getClusterExpansionZoom(clusterId)
  sendMessage('expansionZoom', {
    latlng,
    zoom,
    clusterId
  })
}

/**
 * @link https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * @param str
 * @returns {number}
 */
function getHashOfString(str) {
  let hash = 0
  let i
  let chr
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i)
    hash  = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function sendMessage (action, data = {}) {
  data.action = action
  postMessage(data)
}

function clusteringData({keptPointIds = [], bbox, zoom}, {log, bboxIncreasePer, appendChildIdsToCluster, optimizeRedraw}) {
  if (!cluster) {
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
    features[i].properties.composite_id = features[i].properties.cluster_id

    if (features[i].properties.cluster && grabChild === true) {
      childPointsIdsMap[features[i].properties.cluster_id] = childPointsIdsMap[features[i].properties.cluster_id] || getChildPointsIds(features[i].properties.cluster_id)
      const childIds = childPointsIdsMap[features[i].properties.cluster_id]

      if (appendChildIdsToCluster === true) {
        features[i].properties.childIds = childIds
      }

      if (optimizeRedraw === true) {
        clusterHashMap[features[i].properties.composite_id] = features[i].properties.composite_id || getHashOfString(
          childIds.sort().join(';')
        ).toString()
        features[i].properties.composite_id = clusterHashMap[features[i].properties.composite_id]
      }

      if (hasKeptPoints === true) {
        // TODO to for
        keptPointIds.forEach(id => {
          if (childIds.indexOf(id) > -1) {
            features[i].properties.point_count--
          }
        })
      }
    }

    if (features[i].properties.id) {
      ids.push(features[i].properties.id)
    }
  }

  if (grabChild) {
    // TODO to for
    keptPointIds.forEach(id => {
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
    })
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

function loadFeatures({features = []}, {supercluster}) {
  cluster = new Supercluster(supercluster)
  cluster.load(features)
  lastLoadedFeatures = features
  childPointsIdsMap = {}
  clusterHashMap = {}
  sendMessage('load')
}

