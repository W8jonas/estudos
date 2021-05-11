import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'

import { getRandomPosition } from './utils/getRandomPosition'

import { Particle } from './Particle'

export function Particules({ amount, initialPosition }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(initialPosition),
		size: 0,
		opacity: 1,
	}))

	useEffect(() => {
		function animation(particle) {
			Animated.timing(particle.positionXY, {
				toValue: getRandomPosition({ x: 40, y: 40 }),
				duration: 1200,
				useNativeDriver: false,
				easing: Easing.linear,
			}).start()
		}

		particlesArray.map((particle) => animation(particle))
	}, [particlesArray])

	return (
		<>
			{particlesArray.map((particle) => <Particle key={particle.id} particle={particle} />)}
		</>
	)
}
