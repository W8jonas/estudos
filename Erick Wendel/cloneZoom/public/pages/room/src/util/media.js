class Media {
    async getCamera(audio = true, video = true) {

        // Because i'm using the computer without webcam, i'm set video always false
        return navigator.mediaDevices.getUserMedia({
            video: false,
            audio
        })
    }
}