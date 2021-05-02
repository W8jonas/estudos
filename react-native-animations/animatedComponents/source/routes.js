import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { MainScreen } from './MainScreen'
import { DownloadButton } from './screen/downloadButton/index'
import { ProgressBar } from './screen/progressBar/index'

const Stack = createStackNavigator()

function App() {
	const defaultConfigForScreens = {
		headerShown: false,
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
					options={defaultConfigForScreens}
				/>

				<Stack.Screen
					name="DownloadButton"
					component={DownloadButton}
					options={defaultConfigForScreens}
				/>

				<Stack.Screen
					name="ProgressBar"
					component={ProgressBar}
					options={defaultConfigForScreens}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
