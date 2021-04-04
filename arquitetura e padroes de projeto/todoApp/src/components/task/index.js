import React from 'react'
import { View, Text } from 'react-native'

// Modules
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets
import { colors } from '../../styles'
import styles from './styles'

// Functions

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'

Task.propTypes = {
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	done: PropTypes.bool.isRequired,
}

function Task({
	description, type, date, done,
}) {
	return (
		<View style={styles.container}>
			<View style={[styles.checkCircle, { borderColor: TYPES_AND_COLORS[type] || colors.whiteDefault }]}>
				{ done && <Icon name="check" size={20} color={colors.greenDefault} />}
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.textDescription}>{description}</Text>
				<Text style={styles.textDate}>{new Date(date).toISOString().substring(0, 19).replace('T', '\n')}</Text>
			</View>
		</View>
	)
}

export default Task
