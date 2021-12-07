const express = require('express')
const compression = require('compression')
const url = require('url')
const path = require('path')
const fs = require('fs')
const config = require('./config')

let app = express()

app.use(compression({
  level: 9,
  threshold: 512
}))

app.use('/static', express.static(path.join(__dirname, 'static'), {
  maxAge: 1000 * 0.5
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
app.get('/map', (req, res) => res.render('map'))
app.get('/timetables', (req, res) => res.render('timetables'))
app.get('/fares', (req, res) => res.render('fares'))

app.listen(config.httpPort)
