import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'

import { name as appName } from './app.json'
import App from './src/index'
import { store } from './src/redux/store'

const AppRoot = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => AppRoot)
