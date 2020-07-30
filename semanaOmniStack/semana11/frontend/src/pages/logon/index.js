import React, {useState} from 'react'
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import './styles.css'

import HeroesImg from '../../assets/heroes.png'
import logoSVG from '../../assets/logo.svg'

import api from '../../services/api'

function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    try {
      const res = await api.post('sessions', {id})
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', res.data.name)
      alert(res.data.name)
      history.push('/profile')

    } catch (error) {
      alert('Falha no login, tente novamente')
    }
  }


  return (
    <div className="logon-container">
        <section className="form">
            <img src={logoSVG} alt="Be the Hero"/>

            <form onSubmit={handleRegister}>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="sua IdD"
                value={id}
                onChange={(e)=>setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to='/register'>
					          <FiLogIn size={16} color="#e02041" />
                    Nao tenho cadastro
                </Link>
            </form>
        </section>

		<img src={HeroesImg} alt="Be the Hero"/>
    </div>
  )
}

export default Logon
