import React from 'react'
import { View, Text } from 'react-native'

// Modules

// Assets
import styles from './styles'

// Functions

// Components

function Task() {
	return (
		<View style={styles.container}>
			<View style={styles.checkCircle} />

			<View style={styles.textContainer}>
				<Text style={styles.textDescription}>Descrição</Text>
				<Text style={styles.textDate}>Data</Text>
			</View>
		</View>
	)
}

export default Task
