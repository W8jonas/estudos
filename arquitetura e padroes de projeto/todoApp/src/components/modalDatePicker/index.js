import React, { useState, useEffect } from 'react'
import {
	Button, Modal, Text, TouchableOpacity,
} from 'react-native'

// Modules
import DatePicker from 'react-native-date-picker'

// Assets

// Functions

// Components

function ModalDatePicker(props) {
	return (
		<Modal
			onRequestClose={() => props.onCancel()}
		>
			<Text>Selecione a data da tarefa</Text>

			<DatePicker
				style={{ width: 403, alignSelf: 'center' }}
				date={new Date()}
				mode="datetime"
				is24Hour
				androidVariant="nativeAndroid"
				locale="pt_BR"
			/>

			<Button title="Pronto" onPress={props.onCancel} />
		</Modal>
	)
}

export default ModalDatePicker
