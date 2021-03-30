import React, { useState, useRef } from 'react'
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
import SelectPicker from '../selectPicker/index'

function Input() {
	const inputRef = useRef(null)

	const [showDatePicker, setShowDatePicker] = useState(false)
	const [showSelectPicker, setShowSelectPicker] = useState(false)

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				multiline
				ref={inputRef}
				placeholder="Digite sua nova tarefa"
			/>

			<TouchableOpacity style={styles.touchCalendar} onPress={() => setShowDatePicker(true)}>
				<Icon name="calendar-today" size={20} color={colors.grayDark} />
			</TouchableOpacity>

			<TouchableOpacity style={styles.touchTypeOfTask} onPress={() => setShowSelectPicker(true)}>
				<View style={[styles.circle]} />
				<Text style={styles.textTypeOfTask}>Programação</Text>
				<IconAwesome name="chevron-down" size={15} color={colors.blackDark} />
			</TouchableOpacity>

			{showDatePicker && (
				<ModalDatePicker
					onCancel={() => setShowDatePicker(false)}
					setDate={(date) => { setShowDatePicker(false) }}
					visible={showDatePicker}
				/>
			)}

			{showSelectPicker && (
				<SelectPicker
					onCancel={() => setShowSelectPicker(false)}
					selectItem={(item) => { setShowSelectPicker(false) }}
					visible={showSelectPicker}
				/>
			)}
		</View>
	)
}

export default Input
