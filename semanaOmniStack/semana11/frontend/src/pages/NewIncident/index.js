import React, {useState} from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory} from "react-router-dom";
import './styles.css'

import logoSVG from '../../assets/logo.svg'
import api from '../../services/api'


export default function NewIncident() {
    const history = useHistory()
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    
    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e) {
        e.preventDefault()
        const data = {
            title, description, value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Falha no envio, tente novamente')
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoSVG} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um novo heroi para resolver seus problemas</p>
                
                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}