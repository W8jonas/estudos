import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { Particle } from './Particle'

let timeInterval = null

export function Particules({ amount, initialPosition }) {
	const particlesArray = Array(amount).fill(0).map(() => ({
		id: Math.random(),
		positionXY: new Animated.ValueXY(initialPosition),
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
		if (totalParticlesToShow >= 30) {
			clearInterval(timeInterval)
		}
	}, [totalParticlesToShow])

	return (
		<>
			{particlesArray.map((particle, index) => (
				totalParticlesToShow >= index ? <Particle key={particle.id} particle={particle} /> : null
			))}
		</>
	)
}
