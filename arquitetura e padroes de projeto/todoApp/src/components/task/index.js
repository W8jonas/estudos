import React, { useState } from 'react'
import {
	View, Text, TouchableOpacity, Animated, Easing,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets
import { colors } from '../../styles'
import styles from './styles'

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'

function Task({
	id, description, type, date, done, handleToggleTaskDone, handleDeleteTask, handleUpdateTask,
}) {
	const [opacity] = useState(new Animated.Value(0))
	const [showOptions, setShowOptions] = useState(false)
	const [zIndex, setZIndex] = useState(-3)

	function show() {
		Animated.timing(opacity, {
			toValue: 1,
			useNativeDriver: true,
			duration: 300,
			easing: Easing.linear,
		}).start()
	}

	function hide() {
		Animated.timing(opacity, {
			toValue: 0,
			useNativeDriver: true,
			duration: 100,
			easing: Easing.linear,
		}).start()
	}

	function showExtraOptions() {
		if (!showOptions) {
			setShowOptions(true)
			show()
			setZIndex(5)
		}
	}

	function hideExtraOptions() {
		if (!showOptions) {
			setShowOptions(false)
			hide()
		} else {
			hide()
			setShowOptions(false)
			setZIndex(-3)
		}
	}

	return (
		<TouchableOpacity style={styles.container} onLongPress={showExtraOptions} onPress={hideExtraOptions} activeOpacity={1}>
			<TouchableOpacity
				onPress={() => { handleToggleTaskDone(id) }}
				style={[styles.checkCircle, { borderColor: TYPES_AND_COLORS[type] || colors.whiteDefault }]}
			>
				{ done && <Icon name="check" size={20} color={colors.greenDefault} />}
			</TouchableOpacity>

			<View style={styles.textContainer}>
				<Text style={styles.textDescription}>{description}</Text>
				<Text style={styles.textDate}>{new Date(date).toISOString().substring(0, 19).replace('T', '\n')}</Text>
			</View>
			<Animated.View style={[styles.deleteTaskContainer, { opacity, zIndex }]}>
				<TouchableOpacity style={styles.deleteTaskTouch} activeOpacity={0.7} onPress={() => { handleDeleteTask(id) }}>
					<Text>Excluir</Text>
				</TouchableOpacity>
			</Animated.View>

			<Animated.View style={[styles.editTaskContainer, { opacity, zIndex }]}>
				<TouchableOpacity
					style={styles.editTaskTouch}
					onPress={() => handleUpdateTask({
						id, description, type, date, done,
					})}
					activeOpacity={0.7}
				>
					<Text>Editar</Text>
				</TouchableOpacity>
			</Animated.View>
		</TouchableOpacity>

	)
}

Task.propTypes = {
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	done: PropTypes.bool.isRequired,
	handleToggleTaskDone: PropTypes.func.isRequired,
	handleDeleteTask: PropTypes.func.isRequired,
	handleUpdateTask: PropTypes.func.isRequired,
}

export default Task
