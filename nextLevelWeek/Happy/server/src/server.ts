import express from 'express'
import './database/connection'

const app = express()

app.use(express.json())


app.get('/', (request, response) => {
    return response.json({ok: "2OKK"})
})

app.listen(3333)
