import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Modules

// Assets

// Functions

// Components
import { Shimmer } from './Shimmer'

export function LightShimmerEffect() {
	return (
		<View style={styles.container}>
			<Shimmer width={200} height={200} />
			<View style={styles.content}>
				<Text>Light Shimmer Effect</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	content: {
		height: 200,
		width: 200,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
})
