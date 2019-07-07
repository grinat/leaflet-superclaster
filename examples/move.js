/* global L */

// create map
const map = L.map(document.getElementById('map')).setView([47.05436182288562, 1.4841811669119223], 11)

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

// if popup moved update data
superclusterGroup.on('layer.updated', ({layer}) => {
  const popup = layer.getPopup()
  if (popup && popup.isOpen()) {
    popup.setContent(JSON.stringify(layer.feature))
  }
})

// functions for move data in browser
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let movedMarkers = {}
function moveMarkers() {
  movedMarkers.features.forEach((feature, i) => {
    const [lng, lat] = feature.geometry.coordinates

    const coef = getRandomInt(1, 2) === 2 ? 0.002 : 0.001
    movedMarkers.features[i].geometry.coordinates = [
      lng + coef,
      lat
    ]
  })

  superclusterGroup.loadGeoJsonData(movedMarkers)

  setTimeout(() => moveMarkers(), 10000)
}

// try to load data from github
fetch('https://cors-anywhere.herokuapp.com/https://grinat.github.io/leaflet-superclaster/src/develop/fixtures/markers.geojson.json')
  .then(r => r.json())
  .then(featureCollection => {
    movedMarkers = featureCollection
    moveMarkers()
    preloader.style.display = 'none'
  })
  .catch(e => {
    alert(e)
    preloader.style.display = 'none'
  })

