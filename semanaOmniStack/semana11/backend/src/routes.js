const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes


/**
 * Métodos HTTP
 * 
 * GET: pedir algo para o servidor
 * POST: criar algo no servidor
 * PUT: atualizar algo no servidor
 * DELETE: deletar algo no servidor
 * 
 * Tipos de parâmetros:
 * Query params: estão na rota 
 * Router params: utilizado para nomear recursos da aplicação
 * Request body: contem a poha toda
 */