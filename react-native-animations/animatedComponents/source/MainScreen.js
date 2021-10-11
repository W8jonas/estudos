import React from 'react'
import {
	View, Text, StyleSheet,
} from 'react-native'

import { Button } from './components/Button'

export function MainScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Animated Components!</Text>

			<Button
				onPress={() => navigation.navigate('DownloadButton')}
				label="DownloadButton"
			/>

			<Button
				onPress={() => navigation.navigate('ProgressBar')}
				label="ProgressBar"
			/>

			<Button
				onPress={() => navigation.navigate('GradientBorder')}
				label="Gradient Border"
			/>

			<Button
				onPress={() => navigation.navigate('LightShimmerEffect')}
				label="Light Shimmer Effect"
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		color: '#1E1E1F',
	},
})
