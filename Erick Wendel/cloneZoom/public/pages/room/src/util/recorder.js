class Recorder {
    constructor(userName, stream) {
        this.userName = userName
        this.stream = stream

        this.filename = `id:${userName}-when${Date.now()}`
        this.videoType = 'video/webm'
        this.mediaRecorder = {}
        this.RecorderBlobs = []
        this.recordingActive = false
    }

    _setup() {
        const commonCodecs = [
            "codecs=vp9,opus",
            "codecs=vp8,opus",
            "",
        ]

        const options = commonCodecs
            .map(codec => ({ mimeType: `${this.videoType};${codec}` }))
            .find(options => MediaRecorder.isTypeSupported(options.mimeType))

        if (!options) {
            throw new Error(`none of the codecs: ${commonCodecs.join(',')} are supported`)
        }
        return options
    }

    startRecording() {
        const options = this._setup()
        if (!this.stream.active) return;

        this.mediaRecorder = new MediaRecorder(this.stream, options)
        console.log('Created MediaRecorder', this.mediaRecorder, 'with options: ', this.options)

        this.mediaRecorder.onstop = (event) => {
            console.log('Recorded blobs', this.RecorderBlobs)
        }

        this.mediaRecorder.ondataavailable = event => {
            if (!event.data || !event.data.size) return

            this.RecorderBlobs.push(event.data)
        }

        this.mediaRecorder.start()
        console.log('Media Recorded started: ', this.mediaRecorder)
        this.recordingActive = true
    }

}
