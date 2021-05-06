import React from 'react'
import { View, StyleSheet, Animated } from 'react-native'

export function Particules({ amount }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		initialLocation: new Animated.ValueXY(),
		size: 0,
		opacity: 1,
	}))

	return (
		<>
			{particlesArray.map((particle) => <View key={particle.id} style={styles.container} />)}
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
