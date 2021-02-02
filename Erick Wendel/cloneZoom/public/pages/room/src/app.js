
const __DEV__ = false

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room:', room)


  const socketUrl = __DEV__ ? 'http://localhost:3000' : 'https://vast-ocean-74317.herokuapp.com'

  const socketBuilder = new SocketBuilder({ socketUrl })

  const peerConfigDev = Object.values({
    id: undefined,
    config: {
      port: 9000,
      host: 'localhost',
      path: '/'
    }
  })

  const peerConfigProd = Object.values({
    id: undefined,
    config: {
      host: 'fathomless-citadel-61419.herokuapp.com',
      secure: true,
      path: '/'
    }
  })

  const peerConfig = __DEV__ ? peerConfigDev : peerConfigProd

  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()

  const deps = {
    view,
    media,
    room,
    peerBuilder,
    socketBuilder
  }

  Business.initialize(deps)

}

window.onload = onload