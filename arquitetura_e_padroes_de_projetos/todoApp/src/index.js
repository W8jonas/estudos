import React from 'react'
import { View } from 'react-native'

import BottomTabNavigator from './routes'
import { pushNotificationCreateChannel, pushNotificationConfigure } from './services/notifications'

pushNotificationConfigure()
pushNotificationCreateChannel()

const App = () => (
	<View style={{ flex: 1, backgroundColor: '#FFF' }}>
		<BottomTabNavigator />
	</View>
)

export default App
