import React, { useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

import styles from './styles'

function FilterTask() {
	return (
		<Animated.View
			style={[
				styles.container,
			]}
		>
			<Text>FilterTask</Text>
		</Animated.View>
	)
}

export default FilterTask
