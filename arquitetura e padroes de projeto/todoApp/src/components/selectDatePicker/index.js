import React, { useState } from 'react'
import {
	View, Button, Text, Animated,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'
import DatePicker from 'react-native-date-picker'

// Assets
import styles from './styles'

function SelectDatePicker({ onCancel, visible, setDate }) {
	const [datePicker, setDatePicker] = useState(new Date())

	return (
		<Animated.View
			style={styles.container}
		>
			<Text style={styles.title}>Selecione a data da tarefa</Text>

			<DatePicker
				style={styles.datePickerContainer}
				date={datePicker}
				onDateChange={(date) => setDatePicker(date)}
				mode="datetime"
				is24Hour
				androidVariant="nativeAndroid"
				locale="pt_BR"
			/>

			<Button
				title="         Pronto         "
				onPress={() => setDate(datePicker.getTime())}
			/>
		</Animated.View>
	)
}

SelectDatePicker.propTypes = {
	onCancel: PropTypes.func.isRequired,
	setDate: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired,
}

export default SelectDatePicker
