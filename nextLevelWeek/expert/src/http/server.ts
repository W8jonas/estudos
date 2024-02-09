import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";

import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResult } from "../websocket/poll-results";


const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw-secret",
    hook: "onRequest"
})
app.register(websocket)
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResult)


app.listen({port: 3333})
    .then(() => {console.log('listening on port 3333')})
