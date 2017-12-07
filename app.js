const express = require('express')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()

const mockRoutes = require('./data')
const port = 8080
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

mockRoutes(app, express)

app.listen(port, function(err){
  if(err){
    console.error(err)
  }else {
    console.log('Listening on port', port)
  }
})