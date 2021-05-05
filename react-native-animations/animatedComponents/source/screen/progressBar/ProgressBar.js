import React from 'react'
import { View, StyleSheet } from 'react-native'

const BAR_PROGRESS_WIDTH = 220
const INITIAL_PROGRESS = 10
const GAIN = 60
const TOTAL_PROGRESS = INITIAL_PROGRESS + GAIN

export function ProgressBar() {
	return (
		<View style={styles.container}>
			<View
				style={styles.progressBar}
			/>

			<View
				style={[styles.fluidBar, { width: ((TOTAL_PROGRESS * BAR_PROGRESS_WIDTH) / 100) }]}
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
