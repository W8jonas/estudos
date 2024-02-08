
import {z} from 'zod'

import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'crypto'

export async function voteOnPoll(app: FastifyInstance) {
    app.post('/polls/:pollId/votes', async (request, reply) => {
    
        const voteOnPollBody = z.object({
            pollOptionId: z.string().uuid(),
        })

        const voteOnPollParams = z.object({
            pollId: z.string().uuid(),
        })
    
        const { pollId } = voteOnPollParams.parse(request.params)
        const { pollOptionId } = voteOnPollBody.parse(request.body)
    
        console.log('session', request.cookies)

        let {sessionId} = request.cookies

        if (!sessionId) {
            sessionId = randomUUID()
            reply.setCookie('sessionId', sessionId, {
                path: '/',
                maxAge: 1283923183 * 30, // big time interval
                signed: true,
                httpOnly: true,
            })
        }
        
        await prisma.vote.create({
            data: {
                sessionId, 
                pollId,
                pollOptionId,
            }
        })


        return reply.status(200).send({ sessionId })
    } )

   
}

