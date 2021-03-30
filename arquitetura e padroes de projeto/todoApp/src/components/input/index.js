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
import ModalDatePicker from '../modalDatePicker/index'

function Input() {
	const [showDatePicker, setShowDatePicker] = useState(false)

	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput} multiline placeholder="Digite sua nova tarefa" />

			<TouchableOpacity style={styles.touchCalendar} onPress={() => setShowDatePicker(true)}>
				<Icon name="calendar-today" size={20} color={colors.grayDark} />
			</TouchableOpacity>

			<TouchableOpacity style={styles.touchTypeOfTask}>
				<View style={[styles.circle]} />
				<Text style={styles.textTypeOfTask}>Programação</Text>
				<IconAwesome name="chevron-down" size={15} color={colors.blackDark} />
			</TouchableOpacity>

			{showDatePicker && (
				<ModalDatePicker
					onCancel={() => setShowDatePicker(false)}
					setDate={() => {}}
					visible={showDatePicker}
				/>
			)}
		</View>
	)
}

export default Input
