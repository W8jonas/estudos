class Business {
    constructor({ room, media, view, socketBuilder, peerBuilder }) {
        this.room = room
        this.media = media
        this.view = view
        this.socketBuilder = socketBuilder
        this.peerBuilder = peerBuilder

        this.currentPeer = {}
        this.currentStream = {}
        this.socket = {}
    }

    static initialize(deps) {
        const instance = new Business(deps)
        return instance._init()
    }

    async _init() {
        this.currentStream = await this.media.getCamera()

        this.socket = this.socketBuilder
            .setOnUserConnected(this.onUserConnected())
            .setOnUserDisconnected(this.onUserDisconnected())
            .build()

        this.currentPeer = this.peerBuilder
            .setOnError(this.onPeerError())
            .setOnConnectionOpened(this.onPeerConnectionOpened())
            .build()

        this.addVideoStream('teste01')
    }

    addVideoStream(userId, stream = this.currentStream) {
        const isCurrentId = false

        this.view.renderVideo({
            userId,
            stream,
            isCurrentId
        })
    }

    onUserConnected = function () {
        return userId => {
            console.log('user connected', userId)
        }
    }

    onUserDisconnected = function () {
        return userId => {
            console.log('user disconnected', userId)
        }
    }

    onPeerError = function () {
        return error => {
            console.log('error on peer!', error)
        }
    }

    onPeerConnectionOpened = function () {
        return peer => {
            const id = peer.id
            console.log('peer!', id)
            this.socket.emit('join-room', this.room, id)
        }
    }
}