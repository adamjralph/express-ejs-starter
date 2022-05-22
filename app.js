require('dotenv').config({ path: __dirname + '/.env' })
const DB_KEY = process.env.DB_TOKEN

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const methodOverride = 'method-override'

app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('static'))
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
