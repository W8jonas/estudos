import React from 'react';
import PageDefault from '../../../components/pageDefault/index'
import {Link} from 'react-router-dom'


function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>




      <Link to="/">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}


export default CadastroCategoria