import React, { useEffect } from 'react'
import { StyleSheet, Animated } from 'react-native'

export function Particules({ amount }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(),
		size: 0,
		opacity: 1,
	}))

	useEffect(() => {
		function animation(partcile) {
			Animated.timing(partcile.positionXY, {
				toValue: { x: 40, y: 30 },
				duration: 1200,
				useNativeDriver: false,
			}).start()
		}

		particlesArray.map((partcile) => animation(partcile))
	}, [])

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
