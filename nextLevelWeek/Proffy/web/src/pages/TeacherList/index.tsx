import React from 'react'

// assets
import './styles.css'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'

// Functions

// Components
import PageHeader from '../../components/PageHeader'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="Subject">Matérias</label>
                        <input id="subject" type="text"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input id="week_day" type="text"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>

        </div>
    )
}

export default TeacherList