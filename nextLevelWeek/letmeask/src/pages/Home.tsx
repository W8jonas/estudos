import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import {useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

export function Home() {
    const {signInWithGoogle, user} = useAuth()

    const history = useHistory()

    const [roomCode, setRoomCode] = useState('')

    function handleCreatRoom() {
        if (!user) {
            signInWithGoogle()
        }
        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }
        
        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Essa sala não existe')
            return
        }

        history.push(`rooms/${roomCode}`)
    }


    return (
        <div id="page-auth">
            <aside>
                <img 
                    src={illustrationImg} 
                    alt="Ilustração simbolizando perguntas e respostas"
                />
                <strong>Crie salas de Q&amp;A ao-vivo </strong>
                <p>Tire as duvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img 
                        src={logoImg} 
                        alt="Letmeask"
                    />
                    <button className='create-room' onClick={handleCreatRoom}>
                        <img 
                            src={googleIconImg} 
                            alt="Logo do Google"
                        />
                        Crie sua sala com o Google
                    </button>

                    <div className='separator'>Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onSubmit={handleJoinRoom}
                            onChange={event => setRoomCode(event.target.value)}
                            // value={roomCode}
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                    
                </div>
            </main>
        </div>
    )
}
