class View {
    constructor() {

    }

    createVideoElement({ muted = true, src, srcObject }) {
        const video = document.createElement('video')
        video.muted = muted
        video.src = src

        if (src) {
            video.controls = true
            video.loop = true
        }

        return video
    }
}