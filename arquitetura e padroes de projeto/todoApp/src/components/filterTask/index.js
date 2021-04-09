import React, { useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

import { Easing } from 'react-native-reanimated'

import styles from './styles'

const heightOfContainer = 400
function FilterTask({ visible }) {
	const [pos] = useState(new Animated.Value(heightOfContainer))

	function show() {
		Animated.timing(pos, {
			toValue: 0,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	function hide() {
		Animated.timing(pos, {
			toValue: heightOfContainer,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	useEffect(() => {
		if (visible) {
			show()
		} else {
			hide()
		}
	}, [visible])

	return (
		<Animated.View
			style={[
				styles.container,
				{ transform: [{ translateY: pos }] },
			]}
		>
			<Text>FilterTask</Text>
		</Animated.View>
	)
}

export default FilterTask
