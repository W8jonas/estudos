import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'

const {Navigator, Screen} = createBottomTabNavigator()

import TeacherList from '../Pages/TeacherList/index'
import Favorites from '../Pages/Favorites/index'


function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0, 
                    height: 64, 
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle:{
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size}) => (
                            <Icon name="ios-easel" size={size} color={color}/>
                        )
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size}) => (
                            <Icon name="ios-heart" size={size} color={color}/>
                        )
                }}
            />
        </Navigator>
    )
}

export default StudyTabs

