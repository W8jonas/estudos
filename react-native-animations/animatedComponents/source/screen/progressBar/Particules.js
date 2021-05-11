import React from 'react'
import { Animated } from 'react-native'

import { Particle } from './Particle'

export function Particules({ amount, initialPosition }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(initialPosition),
		size: 0,
		opacity: 1,
	}))

	return (
		<>
			{particlesArray.map((particle) => <Particle key={particle.id} particle={particle} />)}
		</>
	)
}
