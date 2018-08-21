const express = require('express')

const app = express()

app.use('/dist', express.static(__dirname + '/dist'))
app.use('/examples', express.static(__dirname + '/examples'))

app.use(function(req, res){
  res.redirect(301, '/examples/static.html')
})

const port = process.env.PORT || 3301

app.listen(port, () => {
  console.log(`Static server run at http://localhost:${port}`)
})

