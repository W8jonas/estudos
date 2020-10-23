
import {getRepository} from 'typeorm'
import Orphanage from '../models/Orphanages'
import { Request, Response } from 'express'


export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanages = orphanagesRepository.find()
        
        return response.json({orphanages})
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage)
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        })
    
        await orphanagesRepository.save(orphanage)
    
        return response.status(201).json({orphanage})
    }
}
