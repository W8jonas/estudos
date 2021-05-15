import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

import { Particules } from './Particules'

const BAR_PROGRESS_WIDTH = 220
const INITIAL_PROGRESS = 30
const GAIN = 50
const TOTAL_PROGRESS = INITIAL_PROGRESS + GAIN
const totalParticles = 30

export function ProgressBar() {
	const [progress] = useState(new Animated.Value(INITIAL_PROGRESS))
	const [showParticules, setShowParticules] = useState(false)

	function animation() {
		Animated.timing(progress, {
			toValue: ((TOTAL_PROGRESS * BAR_PROGRESS_WIDTH) / 100),
			duration: 2000,
			useNativeDriver: false,
		}).start()
	}

	progress.addListener((prog) => {
		if (prog.value > BAR_PROGRESS_WIDTH * 0.2) {
			setShowParticules(true)
		}
	})

	useEffect(() => {
		animation()
	}, [])

	return (
		<View style={styles.container}>
			<View
				style={styles.progressBar}
			/>

			<Animated.View
				style={[styles.fluidBar, { width: progress }]}
			>
				{showParticules && (
					<Particules
						amount={totalParticles}
						initialPosition={{ x: progress.__getValue(), y: 0 }}
						finalPosition={{ x: BAR_PROGRESS_WIDTH, y: 0 }}
					/>
				)}
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	progressBar: {
		height: 12,
		width: BAR_PROGRESS_WIDTH,
		borderRadius: 12,
		backgroundColor: '#F60',
	},
	fluidBar: {
		position: 'absolute',
		height: 12,
		width: BAR_PROGRESS_WIDTH / 2,
		borderRadius: 12,
		backgroundColor: '#06F',
	},
})
