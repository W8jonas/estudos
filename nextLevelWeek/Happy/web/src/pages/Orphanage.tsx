import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import '../styles/pages/orphanage.css';
import Sidebar from "../components/Sidebar";
import MapIcon from "../components/MapIcon";
import api from "../services/api";
import {useParams} from 'react-router-dom'

interface Orphanages {
  latitude: number,
  longitude: number,
  name: string,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: string,
  images: Array <{
    url: string,
    id: number
  }>
}

interface OrphanageParams {
  id: string,
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>()
  const [orphanage, setOrphanage] = useState<Orphanages>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(()=>{
    api.get(`orphanages/${params.id}`).then((response)=>{
      setOrphanage(response.data)
    })
  }, [params.id])

  if(!orphanage) {
    return <h3>Carregando...</h3>
  }

  return (
    <div id="page-orphanage">

      <Sidebar />
      
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map((image, index)=>(
              <button 
                type="button" 
                key={image.id} 
                className={activeImageIndex === index ? 'active' : ''} 
                onClick={()=>setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={15}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={MapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends 
              ? <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              : <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não atendemos <br />
                  fim de semana
                </div>
              }
            </div>

            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
}