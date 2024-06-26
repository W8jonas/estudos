import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

// pages
import OrphanagesMap from './pages/OrphanagesMap/index'
import OrphanageDetails from './pages/OrphanageDetails/index'

import OrphanageData from './pages/CreateOrphanage/OrphanageData/index'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition/index'

import Header from './components/Header/index'

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f3f2f5'} }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>

                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                    options={{
                        headerShown: true, 
                        header: () => <Header title="Orfanato" showCancel={false}/>
                    }}
                />

                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true, 
                        header: () => <Header title="Informe os dados"/>
                    }}
                />

                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true, 
                        header: () => <Header title="Selecione no mapa"/>
                    }}
                />

            </Navigator>
        </NavigationContainer>
    )
}

