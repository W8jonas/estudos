import express from 'express'
import db from './database/connection'
import convertHoursToMinutes from './utils/convertHoursToMinutes'

const routes = express.Router()

interface Schedule {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) =>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body


    const trx = await db.transaction()

    try {
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        })
    
        const user_id = insertedUsersIds[0]
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
        })
    
        const class_id = insertedClassesIds[0]
        const classSchedule = schedule.map((scheduleItem: Schedule)=>{
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHoursToMinutes(scheduleItem.from),
                to: convertHoursToMinutes(scheduleItem.to),
            }
        })
        
        await trx('class_schedule').insert(classSchedule)
        
        await trx.commit()
        return response.status(201).send()

    } catch (error) {
        await trx.rollback()
        return response.status(400).json({error: 'Deu ruim parceiro'})
    }
})

export default routes