const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors(
  (req, cb) => {
    cb(null, {
      credentials: true,
      origin: req.header('origin')
    })
  }
))
app.use(bodyParser.json())

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const markers = require('./fixtures/markers.geojson')
const movedMarkers = JSON.parse(JSON.stringify(markers))

app.get('/moved-markers', async (req, res) => {

  const isNearCityDreux = function (lat, lng) {
    return lng > -0.6666737932919476 && lng < 1.9315928082705727 && lat > 48.557659461481784 && lat < 49.87264546439564
  }

  movedMarkers.features.forEach((feature, i) => {
    const [lng, lat] = feature.geometry.coordinates

    if (isNearCityDreux(lat, lng)) {
      movedMarkers.features[i].geometry.coordinates = [
        lng,
        lat
      ]
    } else {
      const coef = getRandomInt(1, 2) === 2 ? 0.002 : 0.001
      movedMarkers.features[i].geometry.coordinates = [
        lng + coef,
        lat
      ]
    }

    const {foo} = movedMarkers.features[i].properties
    movedMarkers.features[i].properties.foo = foo === 'gurren' ? 'lagann' : 'gurren'

  })

  res.send(movedMarkers).end()
})

app.get('/static-markers', async (req, res) => {
  res.send(markers).end()
})

const port = 2002

app.listen(port, () => {
  console.log(`Express server started at http://localhost:${port}`)
})
