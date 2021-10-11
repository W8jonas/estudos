import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// Modules

// Assets

// Functions

// Components

export function Button({ label, onPress }) {
	return (
		<TouchableOpacity
			style={styles.buttonContainer}
			onPress={onPress}
		>
			<Text style={styles.buttonContent}>{label}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	buttonContainer: {
		width: 140,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		marginLeft: 20,
		borderRadius: 16,
		backgroundColor: '#E1E2E7',
	},
	title: {
		fontSize: 18,
		color: '#1E1E1F',
	},
	buttonContent: {
		fontSize: 16,
		color: '#1E1E1F',
	},
})
