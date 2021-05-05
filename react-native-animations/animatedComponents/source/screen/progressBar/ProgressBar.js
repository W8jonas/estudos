import React, { useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

const BAR_PROGRESS_WIDTH = 220
const INITIAL_PROGRESS = 30
const GAIN = 50
const TOTAL_PROGRESS = INITIAL_PROGRESS + GAIN

export function ProgressBar() {
	const progress = new Animated.Value(INITIAL_PROGRESS)

	function animation() {
		Animated.timing(progress, {
			toValue: ((TOTAL_PROGRESS * BAR_PROGRESS_WIDTH) / 100),
			duration: 2000,
			useNativeDriver: false,
		}).start()
	}

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
			/>
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
