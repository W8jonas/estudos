
import {z} from 'zod'

import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { redis } from '../../lib/redis'

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
    
        if (!poll) {
            return reply.status(404).send({ message: 'No Poll found' })
        }

        const result = await redis.zrange(poll.id, 0, -1, 'WITHSCORES')

        const votes = result.reduce((acc, current, index) => {
            if (index % 2 === 1) {
                const voteId = result[index - 1]
            
                return {
                    ...acc,
                    [voteId]: Number(current)
                }
            }

            return acc
        }, {} as Record<string, number>)

        const pollsWithVotes = {
            ...poll,
            options: poll.options.map(option => ({
                ...option,
                score: (option.id in votes) ? votes[option.id] : 0,
            }))
        }

        return reply.status(200).send({ poll:pollsWithVotes })
    } )
   
}

