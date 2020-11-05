import React, { ChangeEvent, FormEvent, useState } from "react";
import '../styles/pages/create-orphanage.css';

import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import { LeafletMouseEvent } from 'leaflet'

import Sidebar from "../components/Sidebar";
import MapIcon from "../components/MapIcon";
import api from "../services/api";
import { useHistory } from "react-router-dom";


export default function CreateOrphanage() {
  const history = useHistory()
  const [position, setPosition] = useState({latitude: 0, longitude: 0})
  
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpen_on_weekends] = useState(true)

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])


  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    
    const files = event.target.files

    if(!files) return
    
    const selectedImages = Array.from(files)
    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image=>(
      URL.createObjectURL(image)
    ))
    
    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()
    
    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(position.latitude))
    data.append('longitude', String(position.longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach(image => {
      data.append('images', image)
    })
    
    await api.post('orphanages', data)
    alert('Cadastro realizado com sucesso!')
    history.push('/map')

  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main onSubmit={handleSubmit}>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-20.6699959, -43.7998442]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {position.latitude &&
                <Marker interactive={false} icon={MapIcon} position={[position.latitude, position.longitude]} />
              }
              
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} value={about} onChange={event => setAbout(event.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                {previewImages.map((previewImage)=> (
                  <img key={previewImage} src={previewImage} alt={name}/>
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

              </div>
              <input multiple type="file" id="image[]" onChange={handleSelectImages}/>
            </div>

          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" value={instructions} onChange={event => setInstructions(event.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={event => setOpeningHours(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                    type="button"
                    className={open_on_weekends ? 'active' : ''}
                    onClick={()=> setOpen_on_weekends(true)}
                  >
                    Sim
                  </button>
                <button
                    type="button"
                    className={!open_on_weekends ? 'active' : ''}
                    onClick={()=> setOpen_on_weekends(false)}
                  >
                    Não
                  </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
