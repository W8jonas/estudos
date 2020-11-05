import React, {useState, useEffect} from 'react'

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
import MapIcon from '../components/MapIcon'
import api from '../services/api'


interface Orphanages {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}


export default function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanages[]> ([])

  useEffect(()=>{
    api.get('orphanages').then((response)=>{
      setOrphanages(response.data)
    })
  }, [])


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
        center={[-20.6699959, -43.7998442]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage=>(
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={MapIcon}
          >

            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}

              <Link to={`orphanage/${orphanage.id}`} >
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  )
}

