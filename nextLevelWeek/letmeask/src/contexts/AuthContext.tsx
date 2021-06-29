import { createContext, ReactNode, useState, useEffect } from "react"

import {auth, firebase} from '../services/firebase'

type UserTypes = {
    id: string,
    name: string,
    avatar: string,
}

type AuthContextType = {
    user: UserTypes | undefined,
    signInWithGoogle: () => void
}


type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType )
   
export function AuthContextProvider({children} : AuthContextProviderProps) {
    
    
  const [user, setUser] = useState<UserTypes>()  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      if (user) {
        const {displayName, photoURL, uid} = user
          if (!displayName || !photoURL) {
            throw new Error('Missing information')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user])

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

      auth.signInWithPopup(provider).then(result => {
          if (result.user) {
            const {displayName, photoURL, uid} = result.user

            if (!displayName || !photoURL) {
              throw new Error('Missing information')
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
      <AuthContext.Provider value={{user, signInWithGoogle}}>
          {children}
      </AuthContext.Provider>
    )
}