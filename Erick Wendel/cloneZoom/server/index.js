const server = require('http').createServer((request, response) => {
    response.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    })

    response.end('Hey men!')

})

const { start } = require('repl')
const socketIo = require('socket.io')
const io = socketIo(server, {
    cors: {
        origin: '*',
        credentials: false
    }
})

io.on('connection', socket => {
    console.log('connection: ', socket)
    socket.on('join-room', (roomId, userId) => {

        // adicionando os usuários na mesma sala roomId
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId)
        socket.on('disconnect!', () => {
            console.log('disconnect:', roomId, userId)
            socket.to(roomId).broadcast.emit('user-disconnect', userId)
        })

    })
})

const startServer = () => {
    const { address, port } = server.address()
    console.info('app running at: ', address, ':', port)
}

server.listen(process.env.PORT || 3000, startServer)