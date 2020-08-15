import React from 'react'

import AppStack from './src/routes/AppStack'
import { StatusBar } from 'react-native'


function App() {
    return (
        <>
            <AppStack />
            <StatusBar backgroundColor="#8257E5" barStyle="light-content"/>
        </>
    )
}

export default App