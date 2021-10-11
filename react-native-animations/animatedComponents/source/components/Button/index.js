import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

// Modules

// Assets

// Functions

// Components

export function Button({ label, onPress }) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
		>
			<Text style={styles.content}>{label}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 180,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		marginLeft: 20,
		borderRadius: 16,
		backgroundColor: '#E1E2E7',
	},
	content: {
		fontSize: 16,
		color: '#1E1E1F',
	},
})
