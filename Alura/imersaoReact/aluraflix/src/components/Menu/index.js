import React from 'react';
import Logo from '../../assets/Logo.png'
import ButtonLink from '../ButtonLink/index'

import './Menu.css'


function Menu(){
  return (
    <nav className="Menu">
        <a href='/'>
            <img className="Logo" src={Logo} alt="AluraFlix" />
        </a>

        <ButtonLink className="ButtonLink" href='/'>
            Novo vídeo
        </ButtonLink>
    </nav>
  )
}

export default Menu;