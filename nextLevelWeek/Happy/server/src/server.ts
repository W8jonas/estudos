import express from 'express'
import './database/connection'

const app = express()

app.use(express.json())


app.post('/orphanages', (request, response) => {
    console.log(request.body)
    return response.json({ok: "2OKK"})
})

app.get('/', (request, response) => {
    return response.json({ok: "2OKK"})
})

app.listen(3333)
