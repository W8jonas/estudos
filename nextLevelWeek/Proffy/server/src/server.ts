import express from 'express'

const app = express()

app.get('/users', (request, response) =>{
    return response.json('Hello mennn!! You ara ok brow?')
})

app.listen(3333)



