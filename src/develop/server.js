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

const markers = require('./fixtures/markers.geojson')
const movedMarkers = JSON.parse(JSON.stringify(markers))

app.get('/moved-markers', async (req, res) => {

  movedMarkers.features.forEach((feature, i) => {
    const [lng, lat] = feature.geometry.coordinates
    const {id} = feature.properties
    const coef = id > 5000 ? 0.001 : 0

    movedMarkers.features[i].geometry.coordinates = [
      lng + coef,
      lat
    ]
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
