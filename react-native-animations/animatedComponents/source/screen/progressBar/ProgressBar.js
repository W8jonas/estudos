import React from 'react'
import { View, StyleSheet } from 'react-native'

export function ProgressBar() {
	return (
		<View style={styles.container}>
			<View
				style={styles.progressBar}
			/>

			<View
				style={styles.fluidBar}
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
		width: 100,
		borderRadius: 12,
		backgroundColor: '#F60',
	},
	fluidBar: {
		position: 'absolute',
		height: 12,
		width: 50,
		borderRadius: 12,
		backgroundColor: '#06F',
	},
})
