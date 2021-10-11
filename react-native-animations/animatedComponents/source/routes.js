import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { MainScreen } from './MainScreen'
import { DownloadButton } from './screen/downloadButton/index'
import { GradientBorder } from './screen/gradientBorder/index'
import { LightShimmerEffect } from './screen/LightShimmerEffect/index'
import { LevelUpCard } from './screen/progressBar/index'

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
					name="GradientBorder"
					component={GradientBorder}
					options={defaultConfigForScreens}
				/>

				<Stack.Screen
					name="ProgressBar"
					component={LevelUpCard}
					options={defaultConfigForScreens}
				/>

				<Stack.Screen
					name="LightShimmerEffect"
					component={LightShimmerEffect}
					options={defaultConfigForScreens}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
