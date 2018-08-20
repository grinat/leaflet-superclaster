import * as L from 'leaflet'
import SuperclusterWorker from 'worker-loader!./SuperclusterWorker'

//import './supercluster.scss'

export var SuperclusterGroup = L.SuperclusterGroup = L.FeatureGroup.extend({
  options: {
    clusterIconFunc: null,
    pointIconFunc: null,
    optimizeRedrawClusters: true,
    optimizeRedrawPoints: true,
    appendChildIdsToCluster: false,
    showClustersOnMaxZoom: false,
    bboxIncreasePer: 0,
    moveToLastKept: true,
    clusterzIndexOffset: 1000,
    pointzIndexOffset: 8000,
    animated: false,
    supercluster: {
      radius: 60,
      extent: 256,
      minZoom: null,
      maxZoom: null,
      log: true
    }
  },
  _geoJsonLayer: null,
  _worker: null,
  _map: null,
  _keptPointIds: [],
  _initWorker: function () {
    this._worker = new SuperclusterWorker()
    this._worker.onmessage = (d) => this._onWorkerMessage(d)
  },
  _createGeoJsonLayer: function () {
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

    this._geoJsonLayer.on('layeradd', ({layer}) => {
      if (this.options.animated === true) {
       this._animatedAdd(layer)
      }
    })
    this._geoJsonLayer.on('layerremove', ({layer}) => {
      this.unKeepPoint(layer.feature.properties.id)
    })
    this._geoJsonLayer.on('popupopen', ({layer}) => {
      this.keepPoint(layer.feature.properties.id)
    })
    this._geoJsonLayer.on('popupclose', ({layer}) => {
      this.unKeepPoint(layer.feature.properties.id)
    })
  },
  _deleteLayerFromGeoJsonLayer: function (l) {
    if (l._openedClusterLayer) {
      this._map.removeLayer(l._openedClusterLayer)
      l._openedClusterLayer = null
    }

    if (this.options.animated === true) {
      this._animatedRemove(l)
    }

    // l.remove() // <-- not worked corectly
    this._geoJsonLayer.removeLayer(l)
  },
  _geoJsonClick: function ({latlng, layer}) {
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
  _onPointClick: function (parentLayer, layer) {
    this.fire('point.click', {parentLayer, layer})
  },
  _zoomEnd: function () {
    this._clusteringData()
  },
  _moveEnd: function () {
    this._clusteringData()
  },
  _clusteringData: function () {
    let bounds = this._map.getBounds()
    let bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
    let zoom = this._map.getZoom()

    this._sendMessage('clusteringData', {
      zoom,
      bbox,
      keptPointIds: this._keptPointIds
    })
  },
  _sendMessage: function (action, data = {}) {
    const message = {
      action,
      data,
      options: {
        bboxIncreasePer: this.options.bboxIncreasePer,
        optimizeRedrawClusters: this.options.optimizeRedrawClusters,
        optimizeRedrawPoints: this.options.optimizeRedrawPoints,
        supercluster: this.options.supercluster
      }
    }
    this._worker.postMessage(message)
  },
  loadGeoJsonData: function (featuresOrFutureCollection) {
    let features = []
    if (Array.isArray(featuresOrFutureCollection)) {
      features = featuresOrFutureCollection
    } else {
      features = featuresOrFutureCollection.features
    }
    this._sendMessage('loadFeatures', {features})
  },
  keepPoint: function (id) {
    if (this._keptPointIds.indexOf(id) > -1) {
      return
    }
    this._keptPointIds.push(id)
  },
  unKeepPoint: function (id) {
    if (this._keptPointIds.length > 0) {
      this._keptPointIds = this._keptPointIds.filter(v => v !== id)
      // if we click on point is kept
      // if we minimize zoom, kep point remove from cluster
      // we need recalc cluster for get correct cluster size
      this._clusteringData()
    }
  },
  moveToLastKept: function () {
    console.log('move to last')
    const layers = this._geoJsonLayer.getLayers()

    const lastId = this._keptPointIds[this._keptPointIds.length - 1]
    if (!lastId) {
      return
    }

    const layer = layers.find(l => l.feature.properties.id === lastId)
    if (!layer) {
      return
    }

    const bounds = L.latLngBounds(layer.getLatLng().toBounds(100))
    const lastInView = this._map.getBounds().contains(bounds)
    if (!lastInView) {
      this._map.setView(bounds.getCenter())
    }
  },
  _onWorkerMessage: function ({data}) {
    console.log('_onWorkerMessage', data.action, data)
    switch (data.action) {
      case 'dataClustered':
        this._drawItems(data.features)
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
  },
  _expansionZoom: function ({latlng, zoom}) {
    this._map.setView(latlng, zoom)
  },
  _drawItems: function (features) {
    const layers = this._geoJsonLayer.getLayers()
    const len = layers.length

    const optimizeRedraw = this.options.optimizeRedrawPoints || this.options.optimizeRedrawClusters

    if (optimizeRedraw === false || len === 0) {
      this._geoJsonLayer.clearLayers()
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
          if (this.options.optimizeRedrawClusters === true) {
            this._removeOrUpdateLayer(
              l,
              addClustersFeaturesMap,
              'composite_id'
            )
          } else {
            this._deleteLayerFromGeoJsonLayer(l)
          }
        } else {
          if (this.options.optimizeRedrawPoints === true) {
            this._removeOrUpdateLayer(
              l,
              addMarkerFeaturesMap,
              'id'
            )
          } else {
            this._deleteLayerFromGeoJsonLayer(l)
          }
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
  _removeOrUpdateLayer: function (l, featureIdMap, propKey) {
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

      this._updateClusterLayer(l)
    } else {
      // layer not exist in featureMap
      this._deleteLayerFromGeoJsonLayer(l)
    }
  },
  _clusterIconFunc: function (feature) {
    return new L.DivIcon({
      className: 'supercluster size-36x36',
      html: `<div class="cluster-icon">${feature.properties.point_count}</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    })
  },
  _pointIconFunc: function () {
    return new L.DivIcon({
      className: 'supercluster size-20x20',
      html: '<div class="point-icon"><div class="pulsate"></div></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    })
  },
  /**
   * @override
   */
  initialize: function (options) {
    L.Util.setOptions(this, options)

    this.options.clusterIconFunc = this.options.clusterIconFunc || this._clusterIconFunc
    this.options.pointIconFunc = this.options.pointIconFunc || this._pointIconFunc

    this._initWorker()
  },
  /**
   * @override
   */
  onAdd: function (map) {
    this._map = map

    if (!this.options.supercluster.maxZoom) {
      this.options.supercluster.maxZoom = this._map.getMaxZoom()

      if (!this.options.showClustersOnMaxZoom) {
        this.options.supercluster.maxZoom = this._map.getMaxZoom() - 1
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
  onRemove: function (map) {
    map.off('zoomend', this._zoomEnd, this)
    map.off('moveend', this._moveEnd, this)

    this._geoJsonLayer.clearLayers()
  },
  _updateClusterLayer: function (layer) {
    if (!layer._openedClusterLayer) {
      return
    }

    // remove all and reopen?
    this._map.removeLayer(layer._openedClusterLayer)
    layer._openedClusterLayer = null

    // refresh all markers
    const clusterId = layer.feature.properties.cluster_id
    this._sendMessage('pointsInCluster', {
      clusterId
    })
  },
  _closeCluster: function (layer) {
    this._map.removeLayer(layer._openedClusterLayer)
    layer._openedClusterLayer = null

    if (layer._icon) {
      layer._icon.classList.remove('opened')
    }
  },
  _openCluster: function ({clusterId, features}) {
    const layers = this._geoJsonLayer.getLayers()

    let parentLayer = layers.find(l => l.feature.properties.cluster_id === clusterId)
    if (!parentLayer) {
      return
    }

    // for prevent double set markers
    if (parentLayer._openedClusterLayer) {
      return
    }

    parentLayer._openedClusterLayer = L.geoJson(features, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          zIndexOffset: this.options.pointzIndexOffset,
          icon: this.options.pointIconFunc(feature, latlng)
        })
      },
      // in feature we draw path to point
      // set style for that paths
      style: {
        weight: 1,
        color: '#707070'
      }
    }).addTo(this._map)

    parentLayer._openedClusterLayer.on('click', ({layer}) => {
      // detect is a point
      if (layer instanceof L.Marker) {
        this._onPointClick(parentLayer, layer)
      }
      // else it could be path to points
    })

    parentLayer._openedClusterLayer.on('layerremove', ({layer}) => {
      this.unKeepPoint(layer.feature.properties.id)
    })
    parentLayer._openedClusterLayer.on('popupopen', ({layer}) => {
      this.keepPoint(layer.feature.properties.id)
    })
    parentLayer._openedClusterLayer.on('popupclose', ({layer}) => {
      this.unKeepPoint(layer.feature.properties.id)
    })

    if (parentLayer._icon) {
      parentLayer._icon.classList.add('opened')
    }
  },
  _animatedAdd: function (l) {
    if (l._icon && l._icon.classList) {
      l._icon.classList.add('animate-add')
    }
  },
  _animatedRemove: function (l) {
    if (l._icon && l._icon.classList) {
      const el = l._icon.cloneNode(true)
      el.classList.add('animate-remove')
      this._map.getPane('markerPane').appendChild(el)
      setTimeout(function () {
        el.parentNode.removeChild(el)
      }, 1000)
    }
  }
})

