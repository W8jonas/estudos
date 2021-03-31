/* eslint-disable react/display-name */
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import FilterScreen from './screens/filter/index'
import HomeScreen from './screens/home/index'

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Home',
			tabBarIcon: () => <Icon name="home" size={20} color="#000" />,
		},
	},
	Settings: {
		screen: FilterScreen,
		navigationOptions: {
			title: 'Filter tasks',
			tabBarIcon: () => <Icon name="filter-list-alt" size={20} color="#000" />,
		},
	},
})

export default createAppContainer(TabNavigator)
