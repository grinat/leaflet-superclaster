import * as L from 'leaflet'
// import SuperclusterWorker from 'worker-loader!./SuperclusterWorker'
// eslint-disable-next-line import/default
import SuperclusterWorker from './SuperclusterWorker'

import './supercluster.scss'

export const SuperclusterGroup = L.SuperclusterGroup = L.FeatureGroup.extend({
  options: {
    clusterIconFunc: null,
    pointIconFunc: null,
    optimizeRedraw: true,
    appendChildIdsToCluster: false,
    showClustersOnMaxZoom: true,
    showedSubClusterMultiplier: 2,
    showMarkersBeforeMaxZoom: 1,
    bboxIncreasePer: 0,
    moveToLastKept: false,
    moveToLastKeptBoundsMultiplier: 0.3,
    clusterzIndexOffset: 1000,
    pointzIndexOffset: 8000,
    maxMarkersInClusterOnOnePoint: 250,
    animated: false,
    spiderfyDistanceMultiplier: 0.8,
    log: false,
    legsStyle: {
      weight: 1,
      color: '#707070'
    },
    supercluster: {
      radius: 60,
      extent: 180,
      minZoom: null,
      maxZoom: null,
      log: false
    }
  },
  _geoJsonLayer: null,
  _worker: null,
  _map: null,
  _keptPointIds: [],
  _initWorker () {
    this._worker = new SuperclusterWorker()
    this._worker.onmessage = (d) => this._onWorkerMessage(d)
    this._worker.onerror = e => this.fire('error', e)
  },
  _createGeoJsonLayer () {
    this._geoJsonLayer = L.geoJson(null, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          zIndexOffset: feature.properties.cluster ?
            this.options.clusterzIndexOffset :
            this.options.pointzIndexOffset,
          icon: feature.properties.cluster ?
            this.options.clusterIconFunc(feature, latlng) :
            this.options.pointIconFunc(feature, latlng)
        })
      }
    })

    this._geoJsonLayer.on('click', this._geoJsonClick, this)

    this._geoJsonLayer.on('layerremove', ({layer}) => {
      this._checkAndUnKeepPoint(layer)
    })
    this._geoJsonLayer.on('popupclose', ({layer}) => {
      this._checkAndUnKeepPoint(layer)
    })
    this._geoJsonLayer.on('popupopen', ({layer}) => {
      this._checkAndKeepPoint(layer)
    })

    if (this.options.animated === true) {
      this._geoJsonLayer.on('layeradd', ({layer}) => {
        this._addClassToIcon(layer, 'animate-add')
      })
    }
  },
  _deleteLayerFromGeoJsonLayer (l) {
    this._recursiveRemoveAllOpenedClusterLayer(l)

    this._geoJsonLayer.removeLayer(l)
  },
  _geoJsonClick ({latlng, layer}) {
    if (layer.feature.properties.cluster) {
      // on cluster click
      const isMaxZoom = this._map.getZoom() >= this._map.getMaxZoom()
      const clusterId = layer.feature.properties.cluster_id
      const clusterOpened = !!layer._openedClusterLayer

      if (clusterOpened) {
        this._closeCluster(layer)
      } else if (isMaxZoom === true) {
        this._sendMessage('pointsInCluster', {
          clusterId
        })
      } else {
        this._sendMessage('expansionZoom', {
          clusterId,
          latlng
        })
      }
    } else {
      this._onPointClick(null, layer)
    }
  },
  /**
   * @param parentLayer - exist if click by marker in subcluster
   * @param layer - marker layer
   * @private
   */
  _onPointClick (parentLayer, layer) {
    this.fire('point.click', {parentLayer, layer})
  },
  _zoomEnd () {
    this._clusteringData()
  },
  _moveEnd () {
    this._clusteringData()
  },
  _clusteringData () {
    const bounds = this._map.getBounds()
    const bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
    const zoom = this._map.getZoom()

    this._sendMessage('clusteringData', {
      zoom,
      bbox,
      keptPointIds: this._keptPointIds
    })
  },
  _sendMessage (action, data = {}) {
    const message = {
      action,
      data,
      options: {
        bboxIncreasePer: this.options.bboxIncreasePer,
        optimizeRedraw: this.options.optimizeRedraw,
        supercluster: this.options.supercluster,
        log: this.options.log
      }
    }
    this._worker.postMessage(message)
  },
  loadGeoJsonData (featuresOrFutureCollection) {
    let features = []
    if (Array.isArray(featuresOrFutureCollection)) {
      features = featuresOrFutureCollection
    } else {
      features = featuresOrFutureCollection.features
    }
    this._sendMessage('loadFeatures', {features})
  },
  _checkAndKeepPoint (layer) {
    if (layer instanceof L.Marker && !layer.feature.properties.subCluster) {
      this.keepPoint(layer.feature.properties.id)
    }
  },
  _checkAndUnKeepPoint (layer) {
    if (layer instanceof L.Marker && !layer.feature.properties.subCluster) {
      this.unKeepPoint(layer.feature.properties.id)
    }
  },
  keepPoint (id) {
    if (this._keptPointIds.indexOf(id) > -1) {
      return
    }
    this.options.log && console.log('keepPoint', id)
    this._keptPointIds.push(id)

    if (!this.options.optimizeRedraw) {
      console.warn('keepPoint worked only if optimizeRedraw=true')
    }
  },
  unKeepPoint (id) {
    if (this._keptPointIds.length > 0) {
      this.options.log && console.log('unKeepPoint', id)
      this._keptPointIds = this._keptPointIds.filter(v => v !== id)
      // if we click on point is kept
      // if we minimize zoom, kep point remove from cluster
      // we need recalc cluster for get correct cluster size
      this._clusteringData()
    }
  },
  moveToLastKept () {
    this.options.log && console.log('move to last')
    const layers = this._geoJsonLayer.getLayers()

    const lastId = this._keptPointIds[this._keptPointIds.length - 1]
    if (!lastId) {
      return
    }

    const layer = layers.find(l => l.feature.properties.id === lastId)
    if (!layer) {
      return
    }

    const {distMin} = this._getDistanceFromMapCenter()
    const bounds = L.latLngBounds(layer.getLatLng().toBounds(distMin * this.options.moveToLastKeptBoundsMultiplier))
    const lastInView = this._map.getBounds().contains(bounds)

    if (!lastInView) {
      this._map.setView(bounds.getCenter())
    }
  },
  _onWorkerMessage ({data}) {
    if (this.options.log) {
      console.group(data.action)
      console.time(data.action)
      console.log('workerdata', data)
    }

    switch (data.action) {
      case 'clusteringData':
        this._drawItems(data.features, data.zoom)
        break
      case 'load':
        this._clusteringData(data)
        break
      case 'expansionZoom':
        this._expansionZoom(data)
        break
      case 'pointsInCluster':
        this._openCluster(data)
        break
    }

    if (this.options.log) {
      console.timeEnd(data.action)
      console.groupEnd(data.action)
    }
  },
  _expansionZoom ({latlng, zoom}) {
    this._map.setView(latlng, zoom)
  },
  _drawItems (features, zoom) {
    const currentZoom = this._map.getZoom()
    if (currentZoom !== zoom) {
      // skip redraw data if user fast change zoom
      return
    }

    const layers = this._geoJsonLayer.getLayers()
    const len = layers.length

    if (this.options.optimizeRedraw === false || len === 0) {
      // for remove all clusters and subclusters
      layers.forEach(l => {
        this._deleteLayerFromGeoJsonLayer(l)
      })
      this._geoJsonLayer.addData(features)
    } else {
      const addMarkerFeaturesMap = {}
      const addClustersFeaturesMap = {}

      // create new features map
      const gLen = features.length
      for (let i = 0; i < gLen; i++) {
        if (features[i].properties.cluster) {
          addClustersFeaturesMap[features[i].properties.composite_id] = features[i]
        } else {
          addMarkerFeaturesMap[features[i].properties.id] = features[i]
        }
      }

      // remove or update
      const lLen = layers.length
      for (let i = 0; i < lLen; i++) {
        const l = layers[i]

        if (l.feature.properties.cluster) {
          this._removeOrUpdateLayer(
            l,
            addClustersFeaturesMap,
            'composite_id'
          )
        } else {
          this._removeOrUpdateLayer(
            l,
            addMarkerFeaturesMap,
            'id'
          )
        }
      }

      // add clusters
      this._geoJsonLayer.addData(Object.values(addClustersFeaturesMap))

      // add markers to map
      this._geoJsonLayer.addData(Object.values(addMarkerFeaturesMap))
    }

    this.options.moveToLastKept && this.moveToLastKept()

    this.fire('draw', {layer: this._geoJsonLayer})
  },
  _removeOrUpdateLayer (l, featureIdMap, propKey) {
    const id = l.feature.properties[propKey]
    if (featureIdMap[id]) {
      // update marker pos
      l.setLatLng(
        new L.LatLng(featureIdMap[id].geometry.coordinates[1], featureIdMap[id].geometry.coordinates[0])
      )

      if (l.feature.properties.cluster && l.feature.properties.point_count !== featureIdMap[id].properties.point_count) {
        // update feature info
        l.feature = featureIdMap[id]

        // update icon with count
        l.setIcon(this.options.clusterIconFunc(l.feature))
      } else {
        // update feature info
        l.feature = featureIdMap[id]
      }

      // remove marker from featureMap
      delete featureIdMap[id]

      this.fire('layer.updated', {layer: l})

      this.options.animated && this._addClassToIcon(l, 'animate-move')

      this._updateMarkersInOpenedClusterLayer(l)
    } else {
      // layer not exist in featureMap
      this._deleteLayerFromGeoJsonLayer(l)
    }
  },
  _clusterIconFunc (feature) {
    return new L.DivIcon({
      className: 'supercluster',
      html: `<div class="cluster-icon">${feature.properties.point_count}</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    })
  },
  _pointIconFunc () {
    return new L.DivIcon({
      className: 'supercluster',
      html: '<div class="point-icon"><div class="pulsate"></div></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    })
  },
  /**
   * @override
   */
  initialize (options = {}) {
    for (const opt in options) {
      if (this.options.hasOwnProperty(opt)) {
        if (this.options[opt] instanceof Object) {
          this.options[opt] = Object.assign(this.options[opt], options[opt])
        } else {
          this.options[opt] = options[opt]
        }
      }
    }

    this.options.clusterIconFunc = this.options.clusterIconFunc || this._clusterIconFunc
    this.options.pointIconFunc = this.options.pointIconFunc || this._pointIconFunc

    this._initWorker()
  },
  /**
   * @override
   */
  onAdd (map) {
    this._map = map

    if (!this.options.supercluster.maxZoom) {
      this.options.supercluster.maxZoom = this._map.getMaxZoom()

      if (!this.options.showClustersOnMaxZoom) {
        this.options.supercluster.maxZoom = this._map.getMaxZoom() - this.options.showMarkersBeforeMaxZoom
      }
    }

    if (!this.options.supercluster.minZoom) {
      this.options.supercluster.minZoom = this._map.getMinZoom()
    }

    this._createGeoJsonLayer()
    this._geoJsonLayer.addTo(this._map)

    this._map.on('zoomend', this._zoomEnd, this)
    this._map.on('moveend', this._moveEnd, this)

    this._clusteringData()
  },
  /**
   * @override
   */
  onRemove (map) {
    map.off('zoomend', this._zoomEnd, this)
    map.off('moveend', this._moveEnd, this)

    this._geoJsonLayer.clearLayers()
  },
  _updateMarkersInOpenedClusterLayer (layer) {
    if (!layer._openedClusterLayer) {
      return
    }

    // refresh all markers
    const clusterId = layer.feature.properties.cluster_id
    this._sendMessage('pointsInCluster', {
      clusterId
    })
  },
  _closeCluster (layer) {
    this._recursiveRemoveAllOpenedClusterLayer(layer)

    this._removeClassFromIcon(layer, 'opened')
  },
  _updateMarkersInCluster (parentLayer, features, legs) {
    // create map from exist features
    const featureIdMap = {}

    const len = features.length
    for (let i = 0; i < len; i++) {
      featureIdMap[features[i].properties.id] = features[i]
    }

    // update or remove marker positions
    const subLayers = parentLayer._openedClusterLayer.getLayers()
    const subLen = subLayers.length
    for (let i = 0; i < subLen; i++) {
      const l = subLayers[i]
      const id = l.feature.properties.id

      if (featureIdMap[id]) {
        l.setLatLng(
          new L.LatLng(featureIdMap[id].geometry.coordinates[1], featureIdMap[id].geometry.coordinates[0])
        )
        l.feature = featureIdMap[id]
        this.fire('layer.updated', {layer: l})

        // try to update data in subcluster
        if (l._openedClusterLayer && l.feature.properties.features) {
          // create spiral or subcluster in subcluster
          const {segmentalFeatures, legs} = this._segmentFeaturesForLayer(l, l.feature.properties.features)

          this._updateMarkersInCluster(l, segmentalFeatures, legs)
        } else {
          // if in new markers not segments - remove
          this._recursiveRemoveAllOpenedClusterLayer(l)

          // mark as closed
          this._removeClassFromIcon(l, 'opened')
        }

        // if marker updated - remove from map
        delete featureIdMap[id]
      } else {
        this._recursiveRemoveAllOpenedClusterLayer(l)
        parentLayer._openedClusterLayer.removeLayer(l)
      }
    }

    // insert markers which not exist in subLayers
    const featuresForCreate = Object.values(featureIdMap)

    parentLayer._openedClusterLayer.addData([
      ...featuresForCreate, ...legs
    ])
  },
  _createMarkersInCluster (parentLayer, features, legs) {
    parentLayer._openedClusterLayer = L.geoJson([
      ...features, ...legs
    ], {
      pointToLayer: (feature, latlng) => {
        if (feature.properties.subCluster) {
          return L.marker(latlng, {
            zIndexOffset: this.options.clusterzIndexOffset,
            icon: this.options.clusterIconFunc(feature, latlng)
          })
        }
        return L.marker(latlng, {
          zIndexOffset: this.options.pointzIndexOffset,
          icon: this.options.pointIconFunc(feature, latlng)
        })
      },
      // we draw line from cluster center to point set style for that
      style: this.options.legsStyle
    }).addTo(this._map)

    parentLayer._openedClusterLayer.on('click', ({layer}) => {
      // detect is a point
      if (layer instanceof L.Marker) {
        if (layer.feature.properties.subCluster) {
          this._toggleSubCluster(layer)
        } else {
          this._onPointClick(parentLayer, layer)
        }
      }
      // else it could be path to points
    })
  },
  _recursiveRemoveAllOpenedClusterLayer (l) {
    if (l._openedClusterLayer)  {
      const layers = l._openedClusterLayer.getLayers()
      layers.forEach(subL => {
        this._recursiveRemoveAllOpenedClusterLayer(subL)
        l._openedClusterLayer.removeLayer(subL)
      })

      this._map.removeLayer(l._openedClusterLayer)
      l._openedClusterLayer = null
    }
  },
  _toggleSubCluster (layer) {
    if (layer._openedClusterLayer) {
      this._closeSubCluster(layer)
    } else {
      this._openSubCluster(layer, layer.feature.properties.features)
    }
  },
  _openCluster ({clusterId, features}) {
    const layers = this._geoJsonLayer.getLayers()

    const parentLayer = layers.find(l => l.feature.properties.cluster_id === clusterId)
    if (!parentLayer) {
      return
    }

    const {segmentalFeatures, legs} = this._segmentFeaturesForLayer(parentLayer, features)

    if (parentLayer._openedClusterLayer) {
      this._updateMarkersInCluster(parentLayer, segmentalFeatures, legs)
    } else {
      this._createMarkersInCluster(parentLayer, segmentalFeatures, legs)
    }

    this._addClassToIcon(parentLayer, 'opened')
  },
  _closeSubCluster (parentLayer) {
    if (!parentLayer._openedClusterLayer) {
      return
    }

    this._map.removeLayer(parentLayer._openedClusterLayer)
    parentLayer._openedClusterLayer = null

    this._removeClassFromIcon(parentLayer, 'opened')
  },
  _openSubCluster (parentLayer, features) {
    const {segmentalFeatures, legs} = this._segmentFeaturesForLayer(parentLayer, features)

    if (parentLayer._openedClusterLayer) {
      this._updateMarkersInCluster(parentLayer, segmentalFeatures, legs)
    } else {
      this._createMarkersInCluster(parentLayer, segmentalFeatures, legs)
    }

    this._addClassToIcon(parentLayer, 'opened')
  },
  _getDistanceFromMapCenter () {
    const center = this._map.getCenter()
    const bounds =  this._map.getBounds()

    const centerEast = L.latLng(center.lat, bounds.getEast())
    const distCenterToEast = center.distanceTo(centerEast)

    const centerNorth = L.latLng(bounds.getNorth(), center.lng)
    const distCenterToNorth = center.distanceTo(centerNorth)

    const distMin = distCenterToEast > distCenterToNorth ? distCenterToNorth : distCenterToEast

    this.options.log && console.log({distCenterToEast, distCenterToNorth, distMin})

    return {distCenterToEast, distCenterToNorth, distMin}
  },
  _segmentFeaturesForLayer (parentLayer, features) {
    const parentCenter = parentLayer.getLatLng()

    const segmentalFeatures = this._segmentFeatures(features, parentCenter)

    const legs = this._getLegsForMarkersInCluster(parentCenter, segmentalFeatures)

    return {segmentalFeatures, legs}
  },
  _segmentFeatures (features, parentCenter) {
    // we need to align data by id sor saving order
    // and prevent popup rotate
    features.sort((a, b) => {
      if (a.properties.id > b.properties.id) {
        return 1
      }
      if (a.properties.id < b.properties.id) {
        return -1
      }
      return 0
    })

    const len = features.length
    const maxMarkersInClusterOnOnePoint = this.options.maxMarkersInClusterOnOnePoint
    const subClusterCount = Math.ceil(len / maxMarkersInClusterOnOnePoint)

    if (len <= maxMarkersInClusterOnOnePoint) {
      return this._createSpiral(features, parentCenter)
    }

    // build points for subcluster
    const subClusters = []
    for (let i = 0; i < subClusterCount; i++) {
      const featuresInSubCluster = features.slice(i * maxMarkersInClusterOnOnePoint, (i + 1) * maxMarkersInClusterOnOnePoint)
      subClusters.push({
        type: 'Feature',
        properties: {
          id: `sub_${i}`,
          subCluster: true,
          point_count: featuresInSubCluster.length,
          features: featuresInSubCluster
        },
        geometry: {
          type:'Point',
          coordinates: []
        }
      })
    }

    return this._createSpiral(subClusters, parentCenter, true)
  },
  _createSpiral (features, parentCenter, isSubCluster = false) {
    const spiralLengthFactor = 5
    const spiderfyDistanceMultiplier = this.options.spiderfyDistanceMultiplier * (isSubCluster ? this.options.showedSubClusterMultiplier : 1)
    const spiralFootSeparation = 28
    const spiralLengthStart = 11

    const centerPt = this._map.latLngToLayerPoint(parentCenter)

    const pi2 = Math.PI * 2
    const count = features.length
    const separation = spiderfyDistanceMultiplier * spiralFootSeparation
    const lengthFactor = spiderfyDistanceMultiplier * spiralLengthFactor * pi2
    let legLength = spiderfyDistanceMultiplier * spiralLengthStart
    let angle = 0
    let i
    let p
    let coords

    const newFeatures = []

    // Higher index, closer position to cluster center.
    for (i = count; i >= 0; i--) {
      // Skip the first position, so that we are already farther from center and we avoid
      // being under the default cluster icon (especially important for Circle Markers).
      if (i < count) {
        p = new L.Point(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round()
        coords = this._map.layerPointToLatLng(p)
        features[i].geometry.coordinates = [
          coords.lng,
          coords.lat,
        ]
        newFeatures.push(features[i])
      }
      angle += separation / legLength + i * 0.0005
      legLength += lengthFactor / angle
    }
    return newFeatures
  },
  _getLegsForMarkersInCluster (parentCenter, features) {
    const parentCenterGeometry = [parentCenter.lng, parentCenter.lat]

    const legs = []
    const len = features.length
    for (let i = 0; i < len; i++) {
      legs.push({
        type: 'LineString',
        coordinates: [
          features[i].geometry.coordinates, parentCenterGeometry
        ]
      })
    }

    return legs
  },
  _addClassToIcon (l, name) {
    if (l._icon && l._icon.classList) {
      l._icon.classList.add(name)
    }
  },
  _removeClassFromIcon (l, name) {
    if (l._icon && l._icon.classList) {
      l._icon.classList.remove(name)
    }
  }
})

