import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { Particle } from './Particle'

let timeInterval = null

const DELAY_CYCLE = 1000

export function Particules({
	totalParticlesToGen, totalParticlesAtSameTime, initialPosition, finalPosition,
}) {
	const [particlesArrayToShow, setParticlesArrayToShow] = useState([])
	const [totalParticlesToShow, setTotalParticlesToShow] = useState(0)
	const stepX = ((finalPosition.x - initialPosition.x) / 30) / 2

	useEffect(() => {
		timeInterval = setInterval(() => {
			setTotalParticlesToShow((state) => state + 1)
		}, DELAY_CYCLE)
	}, [])

	useEffect(() => {
		function getPosition(_initialPosition, _totalParticlesToGen, _totalParticlesToShow, _finalPosition) {
			if (_totalParticlesToShow === 0) {
				return _initialPosition
			}
			const distanceX = (_finalPosition.x * stepX * _totalParticlesToShow) / _totalParticlesToGen
			return { x: distanceX, y: 0 }
		}

		if (totalParticlesToShow >= totalParticlesToGen) {
			clearInterval(timeInterval)
		} else {
			const particlesArray = Array(totalParticlesAtSameTime).fill(0).map(() => ({
				id: Math.random(),
				positionXY: new Animated.ValueXY(getPosition(initialPosition, totalParticlesToGen, totalParticlesToShow, finalPosition)),
				size: 0,
				opacity: 1,
			}))

			setParticlesArrayToShow((state) => [...state, ...particlesArray])
		}
	}, [totalParticlesToShow, totalParticlesToGen, initialPosition, finalPosition, totalParticlesAtSameTime])

	useEffect(() => {
		console.log(particlesArrayToShow.length)
	}, [particlesArrayToShow])

	return (
		<>
			{particlesArrayToShow.map((particle, index) => (
				totalParticlesToShow >= index ? (
					<Particle key={particle.id} particle={particle} />
				)
					: null
			))}
		</>
	)
}
