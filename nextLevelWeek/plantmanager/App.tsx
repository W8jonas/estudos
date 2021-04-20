import React from 'react'
import { Welcome } from './source/pages/Welcome'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [loaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  })
  
  if (!loaded) {
    return <AppLoading />
  }

  return (
    <Welcome />
  )
}