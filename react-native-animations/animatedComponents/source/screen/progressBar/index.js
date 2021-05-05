import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Modules

// Assets

// Functions

// Components

export function ProgressBar() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.container}>
				<Text>ProgressBar</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	container: {
		width: '80%',
		height: '70%',
		borderRadius: 40,
		padding: 10,
		backgroundColor: '#FFF',
	},
})
