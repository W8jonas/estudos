import React from 'react'
import { View, StyleSheet } from 'react-native'

export function Particules({ amount }) {
	const particlesArray = Array(amount).fill(0).map(() => Math.random())

	return (
		<>
			{particlesArray.map((particle) => <View key={particle} style={styles.container} />)}
		</>
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
