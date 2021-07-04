import React, { useState } from 'react'
import {
	View, Text, TouchableOpacity, Animated,
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

	function onDeleteTask() {
		handleDeleteTask(id)
	}

	function onUpdateTask() {
		handleUpdateTask({
			id, description, type, date, done,
		})
	}

	return (
		<View style={styles.container}>
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
		</View>
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
