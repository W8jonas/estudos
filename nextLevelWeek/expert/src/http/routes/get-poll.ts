
import {z} from 'zod'

import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getPoll(app: FastifyInstance) {
    app.get('/polls/:id', async (request, reply) => {
    
        const getPollParams = z.object({
            id: z.string().uuid(),
        })
    
        const { id } = getPollParams.parse(request.params)
    
        const poll = await prisma.poll.findUnique({
            where: {
                id
            },
            include: {
                options: {
                    select: {
                        title: true,
                        id: true,
                    }
                }
            }
        })
    
        return reply.status(200).send({ poll })
    } )

   
}

