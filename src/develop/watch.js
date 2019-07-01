// entrypoint for develop in watch mode only
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import {SuperclusterGroup} from '../SuperclusterGroup'

class Map {
  constructor (el) {
    this.map = L.map(el).setView([-37.8133062833, 175.2721598], 7)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map)
  }

  supercluster (features) {
    this.superclusterGroup = new SuperclusterGroup().addTo(this.map)
    this.superclusterGroup.on('point.click', ({layer}) => {
      let popup = layer.getPopup()
      if (!popup) {
        popup = L.popup({
          autoClose: false,
          closeOnClick: false,
          autoPan: false
        }).setContent(JSON.stringify(layer.feature.properties))
        layer.bindPopup(popup).openPopup()
      }
    })

    this.superclusterGroup.on('layer.updated', ({layer}) => {
      const popup = layer.getPopup()
      if (popup && popup.isOpen()) {
        popup.setContent(JSON.stringify(layer.feature.properties))
      }
    })

    this.superclusterGroup.loadGeoJsonData(features)
  }

  loadStatic () {
    fetch('http://localhost:2002/static-markers').then(r => r.json()).then(j => this.supercluster(j.features))
  }
}

const m = new Map(document.getElementById('map'))
m.loadStatic()
