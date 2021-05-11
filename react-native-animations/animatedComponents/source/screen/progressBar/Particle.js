import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'

// Functions
import { getRandomPosition } from './utils/getRandomPosition'

export function Particle({ particle }) {
	const [scale] = useState(new Animated.Value(1))

	useEffect(() => {
		function animation(_particle) {
			Animated.parallel([
				Animated.timing(_particle.positionXY, {
					toValue: getRandomPosition({ x: 40, y: 40 }),
					duration: 1200,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
				Animated.timing(scale, {
					toValue: 0,
					duration: 1200,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
			]).start()
		}

		animation(particle)
	}, [particle, scale])

	return (
		<Animated.View
			style={[
				styles.container,
				particle.positionXY.getLayout(),
				{
					opacity: particle.opacity,
					transform: [{ scale }],
				},
			]}
		/>
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
