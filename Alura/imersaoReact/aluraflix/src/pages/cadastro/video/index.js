import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/pageDefault/index'
import {Link, useHistory} from 'react-router-dom'
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import { URL_BASE } from "../../../config/server";

function CadastroVideo() {
  const history = useHistory()


  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const URL = `${URL_BASE}/categorias`
    
	  fetch(URL)
		.then(async (responseStringify)=>{
				const response = await responseStringify.json()
				setCategories([...response])
		})
  }, [])

  const categoryTitles = categories.map(({ titulo }) => titulo);

  const {data, handleChange} = useForm({
		titulo: 'Video padrão',
		categoria: 'Front End',
		url: '',
  })

  function fetchVideo(video) {
	fetch(`${URL_BASE}/videos`, {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(video)
	})
	.then(()=>{
		alert('Video cadastro com sucesso!!!')
		history.push('/')
	})
	.catch(()=>{
		alert('Tivemos um erro inesperado, tente novamente.')
	})

  }

  function handleSubmit(event) {
	event.preventDefault()
	const selectedCategory = categories.find((category) => category.titulo === data.categoria)
	const categoriaId = selectedCategory.id
	fetchVideo({...data, categoriaId})
  }

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      
      <form onSubmit={handleSubmit}>

        <FormField
            label="Titulo do vídeo"
            type="text"
            name="titulo"
            value={data.titulo}
            onChange={handleChange}
		/>

        <FormField
            label="categoria"
            type="text"
            name="categoria"
			value={data.categoria}
			suggestions={categoryTitles}
            onChange={handleChange}
		/>

        <FormField
            label="URL"
            type="text"
            name="url"
            value={data.url}
            onChange={handleChange}
		/>
        
		<Button type="submit">
          Cadastrar
        </Button>
		
        </form>

      <Link to="/cadastro/categoria">
        Cadastrar vídeo
      </Link>
    </PageDefault>
  )
}


export default CadastroVideo