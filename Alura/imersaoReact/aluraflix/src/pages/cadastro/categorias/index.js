import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

// Components
import PageDefault from '../../../components/pageDefault/index'
import FormField from '../../../components/FormField/index'
import Button from '../../../components/Button/index'
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {

  const initialFormState = {
    name: 'Filme',
    desc: 'Descrição inicial',
    color: '#ccdddd',
  }

  const [categories, setCategories] = useState([initialFormState])

  const {data, handleChange, clearForm} = useForm(initialFormState)

  useEffect(()=>{
	  const URL = "http://localhost:8080/categorias"
	  fetch(URL)
		.then(async (response)=>{
				const responseObj = await response.json()
				setCategories([...responseObj])
		})

  }, [])

  function handleSubmit(event) {
      event.preventDefault()
      setCategories([...categories, data])
      clearForm(initialFormState)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {data.name}</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <FormField
            label="Nome da categoria"
            type="Text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />

          <FormField
            label="descrição"
            type="textarea"
            name="desc"
            value={data.desc}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={data.color}
            onChange={handleChange}
          />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>


      <ul>
        {categories.map((category, index)=>(
          <li key={index}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}


export default CadastroCategoria