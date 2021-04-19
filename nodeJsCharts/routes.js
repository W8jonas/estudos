const express = require("express")
const cors = require('cors')

const testController = require('./src/testCharts')
const bar = require('./src/bar')
const anyChart = require('./src/anyChart')
const working = require('./src/working')

const app = express()

app.use(cors())

app.get('/', testController.Controller)

app.get('/bar', bar.index)
app.get('/anyChart', anyChart.index)

app.get('/ok', working.simpleTest)

app.get('/okBar', working.bar)
app.get('/okStackedBar', working.stackedBar)
app.get('/okPie', working.pie)
app.get('/okLine', working.line)
app.get('/okAll', working.all)


app.listen(3333)
