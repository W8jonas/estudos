import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { Particle } from './Particle'

let timeInterval = null

export function Particules({ amount, initialPosition, finalPosition }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(initialPosition),
		finalPosition,
		size: 0,
		opacity: 1,
	}))

	const [totalParticlesToShow, setTotalParticlesToShow] = useState(1)

	useEffect(() => {
		timeInterval = setInterval(() => {
			setTotalParticlesToShow((state) => state + 1)
		}, 1000)
	}, [])

	useEffect(() => {
		if (totalParticlesToShow >= amount) {
			clearInterval(timeInterval)
		}
	}, [totalParticlesToShow, amount])

	return (
		<>
			{particlesArray.map((particle, index) => (
				totalParticlesToShow >= index ? (
					<Animated.View key={particle.id}>
						<Particle particle={particle} />
					</Animated.View>
				)
					: null
			))}
		</>
	)
}
