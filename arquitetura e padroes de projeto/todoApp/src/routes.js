import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import FilterScreen from './screens/filter/index'
import HomeScreen from './screens/home/index'

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Home',
		},
	},
	Settings: {
		screen: FilterScreen,
		navigationOptions: {
			title: 'Filter tasks',
		},
	},
})

export default createAppContainer(TabNavigator)
