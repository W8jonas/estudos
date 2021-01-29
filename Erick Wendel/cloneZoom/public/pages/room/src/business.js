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

        this.peers = new Map()
        this.userRecordings = new Map()
    }

    static initialize(deps) {
        const instance = new Business(deps)
        return instance._init()
    }

    async _init() {

        this.view.configureRecordButton(this.onRecordPressed.bind(this))

        this.currentStream = await this.media.getCamera()

        this.socket = this.socketBuilder
            .setOnUserConnected(this.onUserConnected())
            .setOnUserDisconnected(this.onUserDisconnected())
            .build()

        this.currentPeer = await this.peerBuilder
            .setOnError(this.onPeerError())
            .setOnConnectionOpened(this.onPeerConnectionOpened())
            .setOnCallReceived(this.onPeerCallReceived())
            .setOnPeerStreamReceived(this.onPeerStreamReceived())
            .setOnCallError(this.onPeerCallError())
            .setOnCallClose(this.onPeerCallClose())
            .build()

        this.addVideoStream(this.currentPeer.id)
    }

    addVideoStream(userId, stream = this.currentStream) {
        const recorderInstance = new Recorder(userId, stream)

        this.userRecordings.set(recorderInstance.filename, recorderInstance)

        if (this.recordingEnabled) {
            recorderInstance.startRecording()
        }

        const isCurrentId = false

        this.view.renderVideo({
            userId,
            stream,
            isCurrentId,
            muted: true
        })
    }

    onUserConnected = function () {
        return userId => {
            console.log('user connected', userId)
            this.currentPeer.call(userId, this.currentStream)
        }
    }

    onUserDisconnected = function () {
        return userId => {
            console.log('user disconnected', userId)

            if (this.peers.has(userId)) {
                this.peers.get(userId).call.close()
                this.peers.delete(userId)
            }
            this.view.setParticipants(this.peers.size)
            this.view.removeVideoElement(userId)
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

    onPeerCallReceived = function () {
        return call => {
            console.log('answering call')
            call.answer(this.currentStream)
        }
    }
    onPeerStreamReceived = function () {
        return (call, stream) => {
            const callerId = call.peer
            this.addVideoStream(callerId, stream)

            this.peers.set(callerId, { call })
            this.view.setParticipants(this.peers.size)
        }
    }

    onPeerCallError = function () {
        return (call, error) => {
            console.log('an call error ocurred!', error)
            this.view.removeVideoElement(call.peer)
        }
    }
    onPeerCallClose = function () {
        return call => {
            console.log('an call close!', call.peer)
        }
    }

    onRecordPressed(recordingEnabled) {
        this.recordingEnabled = recordingEnabled
        console.log('Pressionou:', recordingEnabled)
        for (const [key, value] of this.userRecordings) {
            if (this.recordingEnabled) {
                value.startRecording()
                continue
            }
            this.stopRecording(key)
        }
    }

    async stopRecording(key) {
        const userRecordings = this.userRecordings
        for (const [key, value] of userRecordings) {
            const isContextUser = key.includes(userId)
            if (!isContextUser) continue

            const rec = value
            const isRecordingActive = rec.recordingActive
            if (!isRecordingActive) continue

            await rec.stopRecording()
        }
    }
}
