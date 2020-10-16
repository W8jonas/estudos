import React from 'react'

import '../styles/pages/OrphanagesMap.css'

import logoImg from '../images/mapMarker.svg'
import { FiPlus } from 'react-icons/fi'
import {Link} from 'react-router-dom'


export default function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={logoImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>

          <p>Escolha um orfanato no mapa</p>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

      <footer>
			  <strong>Juiz de Fora</strong>
			  <span>Juiz de Fora</span>
      </footer>

      </aside>
      
      <div>

      </div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  )
}

