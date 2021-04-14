import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DownloadButton from './screen/downloadButton/index'

const Stack = createStackNavigator()

function App() {
	const defaultConfigForScreens = {
		headerShown: false,
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="DownloadButton"
					component={DownloadButton}
					options={defaultConfigForScreens}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
