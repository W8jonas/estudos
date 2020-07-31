import React from 'react';
import Logo from '../../assets/Logo.png'
import ButtonLink from '../ButtonLink/index'
import {Link} from 'react-router-dom'
import './Menu.css'


function Menu(){
  return (
    <nav className="Menu">
        <Link to='/cadastro/video'>
            <img className="Logo" src={Logo} alt="AluraFlix" />
        </Link>

        <ButtonLink className="ButtonLink" to='/cadastro/video'>
            Novo vídeo
        </ButtonLink>
    </nav>
  )
}

export default Menu;