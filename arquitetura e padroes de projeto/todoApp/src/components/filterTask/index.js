import React, { useState, useEffect } from 'react'
import {
	View, Text, Animated, TouchableOpacity,
} from 'react-native'

import { Easing } from 'react-native-reanimated'

import styles from './styles'

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'

const heightOfContainer = 400
function FilterTask({ visible, onCancel }) {
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
			<Text>Selecione suas opções</Text>

			<Text>Selecione os tipos que você deseja:</Text>

			<View style={{
				flexDirection: 'row', width: 80, alignItems: 'center', justifyContent: 'center',
			}}
			>
				{Object.keys(TYPES_AND_COLORS).map((item) => (
					<TouchableOpacity
						key={item}
						style={[styles.selectItem, { backgroundColor: TYPES_AND_COLORS[item] }]}
					>
						<Text style={styles.selectText}>{item}</Text>
					</TouchableOpacity>
				))}
			</View>

			<TouchableOpacity onPress={onCancel} style={styles.exitButton}>
				<Text>Fechar</Text>
			</TouchableOpacity>
		</Animated.View>
	)
}

export default FilterTask
