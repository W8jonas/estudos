import React, { useState } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { Route, BrowserRouter} from 'react-router-dom'

import { createContext } from 'react'
import {auth, firebase} from './services/firebase'

type UserTypes = {
  id: string,
  name: string,
  avatar: string,
}

type AuthContextType = {
  user: UserTypes | undefined,
  signInWithGoogle: () => void
}

export const AuthContext = createContext({} as AuthContextType )

function App() {

  const [user, setUser] = useState<UserTypes>()  

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

      auth.signInWithPopup(provider).then(result => {
          if (result.user) {
            const {displayName, photoURL, uid} = result.user

            if (!displayName || !photoURL) {
              throw new Error('Missign information')
            }

            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
      })
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{user, signInWithGoogle}}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
