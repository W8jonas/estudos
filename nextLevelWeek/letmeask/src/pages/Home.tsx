import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import {useHistory} from 'react-router-dom'

export function Home() {

    const history = useHistory()

    function navigateToNewRoom() {
        history.push('/rooms/new')
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
                    <button className='create-room' onClick={navigateToNewRoom}>
                        <img 
                            src={googleIconImg} 
                            alt="Logo do Google"
                        />
                        Crie sua sala com o Google
                    </button>

                    <div className='separator'>Ou entre em uma sala</div>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
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
