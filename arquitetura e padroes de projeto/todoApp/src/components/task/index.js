import React, { useEffect, useState } from 'react'
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
	id, description, type, date, done, handleToggleTaskDone,
}) {
	const [opacity] = useState(new Animated.Value(0))

	function show() {
		Animated.timing(opacity, {
			toValue: 0,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	function hide() {
		Animated.timing(opacity, {
			toValue: 1,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	useEffect(() => {
		show()
	}, [])

	const posWidth = opacity.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 180],
	})

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

			<Animated.View
				style={[
					styles.deleteTaskContainer,
					{ transform: [{ translateY: posWidth }] },
				]}
			>
				<TouchableOpacity
					style={styles.deleteTaskTouch}
					activeOpacity={0.9}
				>
					<Text>Excluir</Text>
				</TouchableOpacity>
			</Animated.View>

			<Animated.View
				style={[
					styles.editTaskContainer,
					{ transform: [{ translateY: posWidth }] },
				]}
			>
				<TouchableOpacity style={styles.editTaskTouch} activeOpacity={0.9}>
					<Text>Editar</Text>
				</TouchableOpacity>
			</Animated.View>

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
}

export default Task
