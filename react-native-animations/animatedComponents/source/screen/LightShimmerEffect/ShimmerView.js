import React, { useState, useEffect } from 'react'
import {
	Dimensions, StyleSheet, View, Animated, Easing,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
	shimmer: {
		overflow: 'hidden',
		borderRadius: 20,
		backgroundColor: '#0000',
	},
})

const SCREEN_WIDTH = Dimensions.get('screen').width

export function ShimmerView({
	children, style,
}) {
	const START = -1
	const END = 1
	const DURATION = 2000
	const COLORS = ['#0000', '#fff', '#0000']
	const LOCATIONS = [0.3, 0.5, 0.7]
	const ANIMATION = new Animated.Value(START)

	useEffect(() => {
		const runAnimation = () => {
			ANIMATION.setValue(START)
			Animated.timing(ANIMATION, {
				toValue: END,
				duration: DURATION,
				easing: Easing.linear(),
				useNativeDriver: true,
			}).start(runAnimation)
		}

		runAnimation()
	}, [])

	const linear = ANIMATION.interpolate({
		inputRange: [START, END],
		outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
	})

	return (
		<>
			<View style={{
				position: 'absolute', zIndex: 2, height: style.height, width: style.width, justifyContent: 'center', alignItems: 'center',
			}}
			>
				{children}
			</View>
			<View
				style={[
					styles.shimmer,
					// { position: 'absolute', top: -style.height / 2 },
					style,
				]}
			>
				<Animated.View
					style={{
						flex: 1,
						transform: [{ translateX: linear }],
					}}
				>
					<LinearGradient
						style={{ flex: 1, width: SCREEN_WIDTH }}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						locations={LOCATIONS}
						colors={COLORS}
					/>
				</Animated.View>
			</View>

		</>
	)
}
