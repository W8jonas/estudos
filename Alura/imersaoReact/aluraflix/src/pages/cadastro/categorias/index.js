import React, {useState} from 'react';
import PageDefault from '../../../components/pageDefault/index'
import {Link} from 'react-router-dom'


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
          <label> 
            Nome da Categoria: 
            <input 
              type='text'
              value={category.name}
              onChange={(e)=>setCategory({...category, name: e.target.value})}
            />
          </label>

          <label> 
            descrição: 
            <textarea 
              type='text'
              value={category.desc}
              onChange={(e)=>setCategory({...category, desc: e.target.value})}
            />
          </label>

          <label> 
            Cor: 
            <input 
              type='color'
              value={category.color}
              onChange={(e)=>setCategory({...category, color: e.target.value})}
            />
          </label>

        </div>

        <button>
          Cadastrar
        </button>

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