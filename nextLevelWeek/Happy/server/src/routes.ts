import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

routes.get('/orphanages', OrphanagesController.index)
routes.post('/orphanages', OrphanagesController.create)


routes.get('/', (request, response) => {
    return response.json({ok: "2OKK"})
})

export default routes