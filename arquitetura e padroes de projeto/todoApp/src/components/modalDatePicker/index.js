import React, { useState, useEffect } from 'react'
import {
	View, Button, Modal, Text, TouchableOpacity, Dimensions,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'
import DatePicker from 'react-native-date-picker'

// Assets

// Functions

// Components

const { height: screenHeight } = Dimensions.get('window')

function ModalDatePicker({ onCancel, visible, setDate }) {
	return (
		<Modal
			onRequestClose={() => onCancel()}
			animationType="slide"
			transparent
			visible={visible}
		>
			<View style={{ height: screenHeight * 0.5 }} />

			<View style={{
				height: screenHeight * 0.5, backgroundColor: '#FFF', alignItems: 'center',
			}}
			>
				<Text>Selecione a data da tarefa</Text>

				<DatePicker
					style={{ width: 403, alignSelf: 'center', marginVertical: 20 }}
					date={new Date()}
					onDateChange={(date) => setDate(date)}
					mode="datetime"
					is24Hour
					androidVariant="nativeAndroid"
					locale="pt_BR"
				/>

				<Button
					title="         Pronto         "
					onPress={onCancel}
				/>
			</View>
		</Modal>
	)
}

ModalDatePicker.propTypes = {
	onCancel: PropTypes.func.isRequired,
	setDate: PropTypes.func.isRequired,
	visible: PropTypes.number.isRequired,
}

export default ModalDatePicker
