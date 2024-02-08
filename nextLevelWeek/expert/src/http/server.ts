import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { createPoll } from "./routes/create-poll";

const app = fastify()

app.register(createPoll)

app.listen({port: 3333})
    .then(() => {console.log('listening on port 3333')})
