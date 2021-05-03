import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'

import { Welcome } from '../pages/Welcome'
import { Confirmation } from '../pages/Confirmation'
import { UserIdentification } from '../pages/UserIdentification'
import { PlantSave } from '../pages/PlantSave'

import AuthRoutes from './tab'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StackRouts = createStackNavigator()

const AppRoutes: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=>{
        async function getToken() {
            const token = await AsyncStorage.getItem('@plantmanager:token')
            setAuthenticated(!!token)
        }
        getToken()
    }, [])

    return (
        <StackRouts.Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {backgroundColor: colors.white}
            }}
        >
            {!authenticated ? (
                <>
                    <StackRouts.Screen name="Welcome" component={Welcome} />
                    <StackRouts.Screen name="UserIdentification" component={UserIdentification} />
                    <StackRouts.Screen name="Confirmation" component={Confirmation} />
                    <StackRouts.Screen name="PlantSelect" component={AuthRoutes} />
                    <StackRouts.Screen name="PlantSave" component={PlantSave} />
                    <StackRouts.Screen name="MyPlants" component={AuthRoutes} />
                </>
            ) : (
                <>
                    <StackRouts.Screen name="PlantSelect" component={AuthRoutes} />
                    <StackRouts.Screen name="PlantSave" component={PlantSave} />
                    <StackRouts.Screen name="MyPlants" component={AuthRoutes} />
                    <StackRouts.Screen name="Confirmation" component={Confirmation} />
                </>
            )}

        </StackRouts.Navigator>
    )
}

export default AppRoutes