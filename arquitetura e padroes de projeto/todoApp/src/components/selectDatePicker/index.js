import React, { useState, useEffect } from 'react'
import {
	Button, Text, Animated, Easing, Dimensions,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'
import DatePicker from 'react-native-date-picker'

// Assets
import styles from './styles'

const { height: screenHeight } = Dimensions.get('window')
const heightOfContainer = screenHeight * 0.45

function SelectDatePicker({ onCancel, visible, setDate }) {
	const [datePicker, setDatePicker] = useState(new Date())
	const [pos] = useState(new Animated.Value(0))

	function show() {
		Animated.timing(pos, {
			toValue: heightOfContainer,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	function hide() {
		Animated.timing(pos, {
			toValue: 0,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	useEffect(() => {
		if (visible) {
			hide()
		} else {
			show()
		}
	}, [visible])

	return (
		<Animated.View
			style={[
				styles.container,
				{ transform: [{ translateY: pos }] },
			]}
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
