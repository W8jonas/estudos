const express = require("express")
const cors = require('cors')

const app = express()

const IndexController = require('./index')
const working = require('./src/working')
const bar = require('./bar')
const anyChart = require('./src/anyChart')

app.use(cors())

app.get('/', IndexController.Controller)

app.get('/ok', working.simpleTest)

app.get('/okBar', working.bar)
app.get('/okStackedBar', working.stackedBar)
app.get('/okPie', working.pie)
app.get('/okLine', working.line)

app.get('/bar', bar.index)
app.get('/anyChart', anyChart.index)

app.listen(3333)
