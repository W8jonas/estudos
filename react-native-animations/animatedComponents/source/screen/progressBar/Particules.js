import React from 'react'
import { View, StyleSheet } from 'react-native'

export function Particules() {
	return (
		<View style={styles.container} />
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		height: 12,
		width: 12,
		borderRadius: 12,
		backgroundColor: '#F5f9',
	},
})
