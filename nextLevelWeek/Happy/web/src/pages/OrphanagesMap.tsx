import React from 'react'

// assets
import '../styles/pages/OrphanagesMap.css'
import MapMarker from '../images/mapMarker.svg'
import Logo from '../images/Logo.svg'
import 'leaflet/dist/leaflet.css'


// components 
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

// functions
import {Link} from 'react-router-dom'
import Leaflet from 'leaflet'



const mapIcon = Leaflet.icon({
  iconUrl: Logo, 
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

export default function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>

          <p>Escolha um orfanato no mapa</p>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

      <footer>
			  <strong>Juiz de Fora</strong>
			  <span>Juiz de Fora</span>
      </footer>

      </aside>
      
      <Map
        center={[-21.7289999,-43.522607]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          position={[-21.7289999,-43.522607]}
          icon={mapIcon}
        >

          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas

            <Link to="">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>

        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  )
}

