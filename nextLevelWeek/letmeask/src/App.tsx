import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { Route, BrowserRouter} from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
