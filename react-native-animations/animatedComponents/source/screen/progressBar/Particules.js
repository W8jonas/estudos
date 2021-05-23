import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { Particle } from './Particle'

let timeInterval = null

const DELAY_CYCLE = 100

/**
 * Para cada ciclo de delay, o valor de progresso deve sair de initialPosition para finalPosition
 *
 *        |--------------------------------------------|
 *  initialPosition     |         |               finalPosition
 *            |         |         |
 *            |_________|_________| ....
 *           progress = getPosition()
 * A distância a cada nova chamada do getPosition é medida através da variável stepX
 */
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
			if (_totalParticlesToShow <= 1) {
				return _initialPosition
			}
			const distanceX = (_finalPosition.x * stepX * _totalParticlesToShow / 2) / _totalParticlesToGen
			return { x: distanceX, y: 0, text: `(${_finalPosition.x} * ${stepX} * ${_totalParticlesToShow / 2}) / ${_totalParticlesToGen}` }
		}

		if (totalParticlesToShow >= totalParticlesToGen) {
			clearInterval(timeInterval)
		} else {
			const positionVector = getPosition(initialPosition, totalParticlesToGen, totalParticlesToShow, finalPosition)
			const particlesArray = Array(1).fill(0).map(() => ({
				id: Math.random(),
				...positionVector,
				positionXY: new Animated.ValueXY(positionVector),
				size: 0,
				opacity: 1,
			}))

			setParticlesArrayToShow((state) => [...state, ...particlesArray])
		}
	}, [totalParticlesToShow, totalParticlesToGen, initialPosition, finalPosition, totalParticlesAtSameTime, stepX])

	useEffect(() => {
		console.log('particlesArrayToShow: ', stepX, particlesArrayToShow)
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
