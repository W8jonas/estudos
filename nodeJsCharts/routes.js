const express = require("express")

const app = express()

const IndexController = require('./index')
const working = require('./working')
const bar = require('./bar')
const anyChart = require('./src/anyChart')

app.get('/', IndexController.Controller)

app.get('/ok', working.index)
app.get('/okBar', working.bar)
app.get('/okPie', working.pie)
app.get('/okLine', working.line)

app.get('/bar', bar.index)

app.get('/anyChart', anyChart.index)

app.listen(3333)
