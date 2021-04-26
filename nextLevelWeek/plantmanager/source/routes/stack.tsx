import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'

import { Welcome } from '../pages/Welcome'
import { Confirmation } from '../pages/Confirmation'
import { UserIdentification } from '../pages/UserIdentification'
import { PlantSave } from '../pages/PlantSave'
import { MyPlants } from '../pages/MyPlants'

import AuthRoutes from './tab'

const StackRouts = createStackNavigator()

const AppRoutes: React.FC = () => (
    <StackRouts.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {backgroundColor: colors.white}
        }}
    >
        <StackRouts.Screen name="Welcome" component={Welcome} />
        <StackRouts.Screen name="UserIdentification" component={UserIdentification} />
        <StackRouts.Screen name="Confirmation" component={Confirmation} />

        <StackRouts.Screen name="PlantSelect" component={AuthRoutes} />
        <StackRouts.Screen name="PlantSave" component={PlantSave} />
        <StackRouts.Screen name="MyPlants" component={AuthRoutes} />

    </StackRouts.Navigator>
)

export default AppRoutes