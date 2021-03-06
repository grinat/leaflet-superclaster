/* global L */

// features format for superclauster
// or you can use FeatureCollection
const features = [
  {
    properties: {
      // !! id in properties are required
      // used for redraw markers which changes the position
      id: 1
    },
    type: "Feature",
    geometry: {type: "Point", coordinates: [2, 47]}
  },
  {
    properties: {
      id: 2
    },
    type: "Feature",
    geometry: {type: "Point", coordinates: [2.5, 47.5]}
  }
]

// create map
const map = L.map(document.getElementById('map')).setView([47, 2], 7)

// add tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map)

// create superclusterGroup
const superclusterGroup = new L.SuperclusterGroup({
  optimizeRedraw: true, // <-- set false for fast getting data from supercluster worker
  log: true,
  supercluster: {
    log: true
  }
}).addTo(map)

// create popup
superclusterGroup.on('point.click', ({layer}) => {
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

// try to load data from github
fetch('https://cors-anywhere.herokuapp.com/https://grinat.github.io/leaflet-superclaster/src/develop/fixtures/markers.geojson.json')
  .then(r => r.json())
  .then(featureCollection => {
    // add downloaded to superclusterGroup for show markers
    superclusterGroup.loadGeoJsonData(featureCollection)
    preloader.style.display = 'none'
  })
  .catch(() => {
    // if download failed set 2 markers
    superclusterGroup.loadGeoJsonData(features)
    preloader.style.display = 'none'
  })
