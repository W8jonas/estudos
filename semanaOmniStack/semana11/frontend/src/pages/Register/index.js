import React, {useState} from 'react'
import './styles.css'
import logoSVG from '../../assets/logo.svg'

import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api'

export default function Register() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name, email, whatsapp, city, uf
        }

        try {
            const res = await api.post('ongs', data)
            alert(`DEU BOM ${res.data.id}`)
            history.push('/')
        } catch (error) {
            alert(`DEU RUIM ${error}`)
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoSVG} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e foda-se</p>
                
                    <Link className="back-link" to='/'>
                        <FiArrowLeft size={16} color="#e02041" />
                        Nao tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}    
                    />
                    <input 
                        placeholder="E-mail" type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}    
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={(e)=>setWhatsapp(e.target.value)}    
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}    
                        />
                        <input 
                            placeholder="UF" style={{ width: 80}}
                            value={uf}
                            onChange={(e)=>setUf(e.target.value)}    
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}