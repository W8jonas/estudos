import React, { useState, useEffect } from 'react'
import {
	View, Text, TouchableOpacity, TextInput,
} from 'react-native'

// Modules
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets
import { colors } from '../../styles'
import styles from './styles'

// Functions

// Components

function Input() {
	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput} />

			<TouchableOpacity style={styles.touchCalendar}>
				<Icon name="calendar-today" size={20} color={colors.grayDark} />
			</TouchableOpacity>

			<TouchableOpacity style={styles.touchTypeOfTask}>
				<View style={styles.circle} />
				<Text> Work </Text>
				<IconAwesome name="chevron-down" size={16} color={colors.blackDark} />
			</TouchableOpacity>

		</View>
	)
}

export default Input