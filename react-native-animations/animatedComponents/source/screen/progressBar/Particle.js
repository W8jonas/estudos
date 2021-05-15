import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'

// Functions
import { getRandomPosition } from './utils/getRandomPosition'

export function Particle({ particle }) {
	const [scale] = useState(new Animated.Value(1))
	const [rotate] = useState(new Animated.Value(0))

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
				Animated.timing(rotate, {
					toValue: 1,
					duration: 3000,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
			]).start()
		}

		animation(particle)
	}, [particle, scale, rotate])

	const opacity = scale.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1],
	})

	const spin = rotate.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	})

	return (
		<Animated.View
			style={[
				styles.container,
				particle.positionXY.getLayout(),
				{
					opacity,
					transform: [{ rotate: spin }],
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
		backgroundColor: '#F5f9',
	},
})
