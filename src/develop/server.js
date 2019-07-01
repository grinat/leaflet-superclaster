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

app.get('/moved-markers', async (req, res) => {

})

app.get('/static-markers', async (req, res) => {
  res.send(markers).end()
})


const port = process.env.PORT || 2002

app.listen(port, () => {
  console.log(`Express server started at http://localhost:${port}`)
})
