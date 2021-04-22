import React from 'react'
import Routes from './source/routes/index'

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
    <Routes />
  )
}
