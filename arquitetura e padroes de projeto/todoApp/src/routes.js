import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import FilterScreen from './screens/filter/index'
import HomeScreen from './screens/home/index'

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		title: 'HomeScreen',
	},
	Settings: {
		screen: FilterScreen,
		title: 'FilterScreen',
	},
})

export default createAppContainer(TabNavigator)
