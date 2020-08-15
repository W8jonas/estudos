import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

import StudyTabs from './StudyTabs'

import Landing from '../Pages/Landing/index'
import GiveClasses from '../Pages/GiveClasses/index'

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack