import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './source/routes'

AppRegistry.registerComponent(appName, () => App)
