class View {
    constructor() {
        this.recorderBtn = document.getElementById('record')
        this.leaveBtn = document.getElementById('leave')
    }

    createVideoElement({ muted = true, src, srcObject }) {
        const video = document.createElement('video')
        video.muted = muted
        video.src = src
        video.srcObject = srcObject

        if (src) {
            video.controls = true
            video.loop = true
            Util.sleep(200).then(_ => video.play())
        }

        if (srcObject) {
            video.addEventListener("loadedmetadata", _ => video.play())
        }

        return video
    }

    renderVideo({ userId, stream = null, url = null, isCurrentId = false, muted = true }) {
        const video = this.createVideoElement({ src: url, srcObject: stream, muted })
        this.appendToHTMLTree(userId, video, isCurrentId)
    }

    appendToHTMLTree(userId, video, isCurrentId) {
        const div = document.createElement('div')
        div.id = userId
        div.classList.add('wrapper')
        div.append(video)
        const div2 = document.createElement('div')
        div2.innerText = isCurrentId ? '' : userId
        div.append(div2)

        const videoGrid = document.getElementById('video-grid')
        videoGrid.append(div)
    }

    setParticipants(count) {
        const myself = 1
        const participants = document.getElementById('participants')
        participants.innerHTML = (count + myself)
        console.log('participants innerHTML', count + myself)
    }

    removeVideoElement(id) {
        const element = document.getElementById(id)
        element.remove()
    }

    toggleRecordingButtonColor(isActive = true) {
        this.recorderBtn.style.color = isActive ? 'red' : 'white'

    }
    onRecordClick(command) {
        this.recordingEnabled = false
        return () => {
            const isActive = this.recordingEnabled = !this.recordingEnabled
            command(this.recordingEnabled)
            this.toggleRecordingButtonColor(isActive)
        }
    }
    configureRecordButton(command) {
        this.recorderBtn.addEventListener('click', this.onRecordClick(command))
    }

    onLeaveClick(command) {
        return async () => {
            command()

            await Util.sleep(1000)
            window.location = '/pages/home'
        }
    }
    configureLeaveButton(command) {
        this.leaveBtn.addEventListener('click', this.onLeaveClick(command))
    }
}
