import React from 'react'
import {
	View, Text, TouchableOpacity, StyleSheet,
} from 'react-native'

export function MainScreen() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.buttonContent}>MainScreen</Text>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		padding: 20,
	},
	buttonContainer: {
		width: 120,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: '#E1E2E7',
	},
	buttonContent: {
		fontSize: 16,
		color: '#1E1E1F',
	},
})
