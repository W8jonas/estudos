import React from 'react'
import { View, Text, Button } from 'react-native'

import ErrorBoundary from 'react-native-error-boundary'

import BottomTabNavigator from './routes'
import { pushNotificationCreateChannel, pushNotificationConfigure } from './services/notifications'

pushNotificationConfigure()
pushNotificationCreateChannel()

function errorHandler(error, stackTrace) {
	console.log('Error: ', stackTrace)
}

function CustomFallback({ error, resetError }) {
	return (
		<View>
			<Text>Something happened!</Text>
			<Text>{error.toString()}</Text>
			<Button onPress={resetError} title="Try again" />
		</View>
	)
}

function App() {
	return (

		<View style={{ flex: 1, backgroundColor: '#FFF' }}>
			<ErrorBoundary FallbackComponent={CustomFallback} onError={errorHandler}>
				<BottomTabNavigator />
			</ErrorBoundary>
		</View>
	)
}

export default App
