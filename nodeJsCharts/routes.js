const express = require("express")

const app = express()

const IndexController = require('./index')
const working = require('./working')
const bar = require('./bar')

app.get('/', IndexController.Controller)
app.get('/ok', working.index)
app.get('/bar', bar.index)

app.listen(3333)
