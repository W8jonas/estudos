import React, { useEffect } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'

import { getRandomPosition } from './utils/getRandomPosition'

export function Particules({ amount, initialPosition }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(initialPosition),
		size: 0,
		opacity: 1,
	}))

	useEffect(() => {
		function animation(partcile) {
			Animated.timing(partcile.positionXY, {
				toValue: getRandomPosition({ x: 40, y: 40 }),
				duration: 1200,
				useNativeDriver: false,
				easing: Easing.linear,
			}).start()
		}

		particlesArray.map((partcile) => animation(partcile))
	}, [particlesArray])

	return (
		<>
			{particlesArray.map((particle) => (
				<Animated.View
					key={particle.id}
					style={[styles.container, particle.positionXY.getLayout()]}
				/>
			))}
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
