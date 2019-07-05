// entrypoint for develop in watch mode only
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-measure'
import 'leaflet-measure/dist/leaflet-measure.css'

import './watch.scss'

import {SuperclusterGroup} from '../SuperclusterGroup'

class Map {
  constructor (el) {
    this.map = L.map(el).setView([47, 2], 7)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map)

    this.measureControl = L.control.measure({
      primaryLengthUnit: 'meters'
    })
    this.measureControl.addTo(this.map)

    this.initSupercluster()
  }

  initSupercluster () {
    this.superclusterGroup = new SuperclusterGroup().addTo(this.map)
    this.superclusterGroup.on('point.click', ({layer}) => {
      let popup = layer.getPopup()
      if (!popup) {
        popup = L.popup({
          autoClose: false,
          closeOnClick: false,
          autoPan: false
        }).setContent(JSON.stringify(layer.feature))
        layer.bindPopup(popup).openPopup()
      }
    })

    this.superclusterGroup.on('layer.updated', ({layer}) => {
      const popup = layer.getPopup()
      if (popup && popup.isOpen()) {
        popup.setContent(JSON.stringify(layer.feature))
      }
    })
  }

  destroySupercluster () {
    if (this.superclusterGroup) {
      this.superclusterGroup.remove()
      this.superclusterGroup = null
    }
  }

  loadMoved () {
    fetch('http://localhost:2002/moved-markers')
      .then(r => r.json())
      .then(features => {
        console.time('loadMoved')
        this.superclusterGroup.loadGeoJsonData(features)
        console.timeEnd('loadMoved')
      })
  }

  loadMovedWithDelay (delay = 10000) {
    this.loadMoved()

    if (this.moveInterval) {
      clearInterval(this.moveInterval)
    }

    this.moveInterval = setInterval(() => this.loadMoved(), delay)
  }

  loadStatic () {
    fetch('http://localhost:2002/static-markers')
      .then(r => r.json())
      .then(features => {
        console.time('loadStatic')
        this.superclusterGroup.loadGeoJsonData(features)
        console.timeEnd('loadStatic')
      })
  }
}

console.log(process.env)

const m = new Map(document.getElementById('map'))

document.getElementById('loadStatic').addEventListener('click', () => {
  m.destroySupercluster()
  m.initSupercluster()
  m.loadStatic()
})

document.getElementById('startMove').addEventListener('click', () => {
  m.destroySupercluster()
  m.initSupercluster()
  m.loadMovedWithDelay()
})

document.getElementById('pauseMove').addEventListener('click', () => {
  clearInterval(m.moveInterval)
})

document.getElementById('resumeMove').addEventListener('click', () => {
  m.loadMovedWithDelay()
})
