import React from 'react';
import PageDefault from '../../../components/pageDefault/index'
import {Link} from 'react-router-dom'


function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label> 
          Nome da Categoria:

          <input 
            type='text'
          />
        </label>

        <button>
          Cadastrar
        </button>

      </form>

      <Link to="/">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}


export default CadastroCategoria