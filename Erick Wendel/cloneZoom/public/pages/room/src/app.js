

const recordClick = function (recorderBtn) {
  this.recordingEnabled = false
  return () => {
    this.recordingEnabled = !this.recordingEnabled
    recorderBtn.style.color = this.recordingEnabled ? 'red' : 'white'
  }
}

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room:', room)

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const view = new View()
  view.renderVideo({ userId: 'Random 1', url: 'https://media.giphy.com/media/HOhtUWb2tOWSoM1W5h/giphy.mp4' })
  view.renderVideo({ userId: 'Random 2', url: 'https://media.giphy.com/media/HOhtUWb2tOWSoM1W5h/giphy.mp4' })
  view.renderVideo({ userId: 'W8Jonas', isCurrentId: true, url: 'https://media.giphy.com/media/HOhtUWb2tOWSoM1W5h/giphy.mp4' })

}

window.onload = onload