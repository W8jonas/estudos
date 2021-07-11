import React from 'react'
import { View } from 'react-native'

import { func } from 'prop-types'
import ErrorBoundary from 'react-native-error-boundary'

import BottomTabNavigator from './routes'
import { pushNotificationCreateChannel, pushNotificationConfigure } from './services/notifications'

pushNotificationConfigure()
pushNotificationCreateChannel()

function errorHandler(error, stackTrace) {
	console.log('Error: ', stackTrace)
}

function App() {
	return (

		<View style={{ flex: 1, backgroundColor: '#FFF' }}>
			<ErrorBoundary onError={errorHandler}>
				<BottomTabNavigator />
			</ErrorBoundary>
		</View>
	)
}

export default App
