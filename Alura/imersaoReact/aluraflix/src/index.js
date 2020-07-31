import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index';
import CadastroVideo from './pages/cadastro/video/index'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={()=><div>Error 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

