class Map {
  constructor (el) {
    this.map = L.map(el).setView([51.505, -0.09], 7)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.map)
  }

  supercluster () {
    this.superclusterGroup = new L.SuperclusterGroup().addTo(this.map)
    this.superclusterGroup.on('point.click', function({parentLayer, layer, target}) {
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

    this.superclusterGroup.on('layer.updated', function ({layer}) {
      const popup = layer.getPopup()
      if (popup && popup.isOpen()) {
        popup.setContent(JSON.stringify(layer.feature.properties))
      }
    })

    const features = [
      {
        properties: {
          // !! id in properties are required
          // used for redraw markers which changes the position
          id: 1
        },
        type: "Feature",
        geometry: {type: "Point", coordinates: [-0.09, 51.505]}
      },
      {
        properties: {
          id: 2
        },
        type: "Feature",
        geometry: {type: "Point", coordinates: [-0.01, 51.605]}
      }
    ]
    this.superclusterGroup.loadGeoJsonData(features)
  }
}

const m = new Map(map)
m.supercluster()


