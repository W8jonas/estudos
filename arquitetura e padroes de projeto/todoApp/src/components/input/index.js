import React, { useState, useEffect } from 'react'
import {
	View, Text, TouchableOpacity, TextInput,
} from 'react-native'

// Modules
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets

// Functions

// Components

function Input() {
	return (
		<View style={{
			backgroundColor: '#FFF', flexDirection: 'row', borderRadius: 22, padding: 10, marginTop: 10, marginBottom: 5, alignItems: 'center',
		}}
		>

			<TextInput />

			<TouchableOpacity>
				<Icon name="calendar-today" size={20} color="#B8BAC6" />
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={{
					height: 12, width: 12, borderRadius: 12, borderColor: '#F60', borderWidth: 2,
				}}
				/>
				<Text> Work </Text>
				<IconAwesome name="chevron-down" size={28} color="#000" />
			</TouchableOpacity>

		</View>
	)
}

export default Input
