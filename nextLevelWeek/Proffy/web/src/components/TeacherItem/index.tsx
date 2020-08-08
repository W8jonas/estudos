import React from 'react'

// assets
import './styles.css'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teachers-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/39463872?s=460&u=1f4c467aaa2280affdd5c119e1870e64cd08b13d&v=4" />
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Diego Fernandes</span>
                </div>
            </header>

            <p>
                Um texto realmente qualquer por enquanto
                <br/> <br/>
                Um texto realmente qualquer por enquanto
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R%80,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem