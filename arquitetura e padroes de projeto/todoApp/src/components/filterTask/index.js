import React, { useState, useEffect } from 'react'
import {
	View, Text, Animated, TouchableOpacity,
} from 'react-native'

import { Easing } from 'react-native-reanimated'

import styles from './styles'

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'

const heightOfContainer = 400
function FilterTask({ visible, onCancel, updateFilterParams }) {
	const [pos] = useState(new Animated.Value(heightOfContainer))

	const [taskType, setTaskType] = useState('')

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

	useEffect(() => {
		updateFilterParams(taskType)
	}, [taskType])

	return (
		<Animated.View
			style={[
				styles.container,
				{ transform: [{ translateY: pos }] },
			]}
		>
			<Text style={styles.title}>Selecione suas opções</Text>

			<Text style={styles.caption}>Selecione os tipos que você deseja visualizar:</Text>

			<View style={styles.typesToSelectContainer}>
				{Object.keys(TYPES_AND_COLORS).map((typeOfTask) => (
					<TouchableOpacity
						key={typeOfTask}
						onPress={() => setTaskType(typeOfTask)}
						style={[
							styles.selectItem,
							{ backgroundColor: typeOfTask === taskType ? TYPES_AND_COLORS[typeOfTask] : '#FFF' },
						]}
					>
						<Text style={[styles.selectText, typeOfTask === taskType ? { } : { color: '#000' }]}>{typeOfTask}</Text>
					</TouchableOpacity>
				))}
			</View>

			<TouchableOpacity onPress={onCancel} style={styles.exitButton}>
				<Text style={styles.textExitButton}>Fechar</Text>
			</TouchableOpacity>
		</Animated.View>
	)
}

export default FilterTask
