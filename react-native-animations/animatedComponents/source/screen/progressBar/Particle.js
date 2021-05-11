import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated } from 'react-native'

// Modules

// Assets

// Functions

// Components

export function Particle({ particle }) {
	return (
		<Animated.View
			style={[styles.container, particle.positionXY.getLayout()]}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		height: 12,
		width: 12,
		borderRadius: 12,
		backgroundColor: '#F5f9',
	},
})
