import React, {useEffect, useState} from 'react'
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import './styles.css'

import HeroesImg from '../../assets/heroes.png'
import logoSVG from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    const [incidents, setIncidents] = useState([])

    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(res => setIncidents(res.data))
    },[ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setIncidents(incidents.filter(item => item.id !== id))
          } catch (error) {
            alert('Falha no delete, tente novamente')
          }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoSVG} alt="Be the Heo"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to='/incident/new'>
                    Cadastrar caso novo
                </Link>
                <button type='button' onClick={handleLogout}>
                    <FiPower size={16} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map(item => (
                    <li key={item.id}>
                        <strong>CASO:</strong>
                        <p>{item.title}</p>
                        
                        <strong>DESCRIÇÃO:</strong>
                        <p>{item.description}</p>
                        
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</p>

                        <button onClick={()=> handleDeleteIncident(item.id)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    ))
                }
            </ul>

        </div>
    )
}
