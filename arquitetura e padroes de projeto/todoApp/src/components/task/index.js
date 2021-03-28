import React from 'react'
import { View, Text } from 'react-native'

// Modules
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets
import styles from './styles'

// Functions

// Components

const TYPES_AND_COLORS = {
	programação: '#f60',
	Faculdade: '#848',
}

Task.propTypes = {
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	data: PropTypes.number.isRequired,
	done: PropTypes.bool.isRequired,
}

function Task({
	description, type, data, done,
}) {
	return (
		<View style={styles.container}>
			<View style={[styles.checkCircle, { borderColor: TYPES_AND_COLORS[type] || '#eaebee' }]}>
				{ done && <Icon name="check" size={20} color="#080" />}
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.textDescription}>{description}</Text>
				<Text style={styles.textDate}>{new Date(data).toISOString().substring(0, 19).replace('T', '\n')}</Text>
			</View>
		</View>
	)
}

export default Task
