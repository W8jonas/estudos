import React, {useState} from 'react';
import {Link} from 'react-router-dom'

// Components
import PageDefault from '../../../components/pageDefault/index'
import FormField from '../../../components/FormField/index'
import Button from '../../../components/Button/index'


function CadastroCategoria() {

  const initialCategoryState = {
    name: 'Filme',
    desc: 'Descrição inicial',
    color: '#ccdddd',
  }

  const [category, setCategory] = useState(initialCategoryState)
  const [categories, setCategories] = useState([initialCategoryState])


  function handleSubmit(event) {
      event.preventDefault()
      setCategories([...categories, category])
      setCategory(initialCategoryState)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <FormField
            label="Nome da categoria"
            type="Text"
            name="name"
            value={category.name}
            onChange={(e)=>setCategory({...category, name: e.target.value})}
          />

          <FormField
            label="descrição"
            type="textarea"
            name="descrição"
            value={category.desc}
            onChange={(e)=>setCategory({...category, desc: e.target.value})}
          />

          <FormField
            label="Cor"
            type="color"
            name="name"
            value={category.color}
            onChange={(e)=>setCategory({...category, color: e.target.value})}
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