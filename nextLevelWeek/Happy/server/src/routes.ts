import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', OrphanagesController.create)


routes.get('/', (request, response) => {
    return response.json({ok: "Ok mano"})
})

export default routes