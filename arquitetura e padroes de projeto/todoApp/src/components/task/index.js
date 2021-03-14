import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Modules

// Assets

// Functions

// Components

function Task() {
	return (
		<View style={{
			width: '100%',
			height: 60,
			backgroundColor: '#FFF',
			elevation: 4,
			borderBottomWidth: 2,
			borderBottomColor: '#ccc',
			flexDirection: 'row',
			alignItems: 'center',
			paddingHorizontal: 15,
			borderRadius: 30,
			marginTop: 10,
		}}
		>
			<View style={{
				height: 30, width: 30, borderRadius: 30, borderWidth: 3, borderColor: '#f60', backgroundColor: '#Fa0',
			}}
			/>

			<View style={{
				flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginLeft: 10,
			}}
			>
				<Text style={{ width: '70%' }}>Descrição</Text>
				<Text style={{ width: '20%' }}>Data</Text>
			</View>
		</View>
	)
}

export default Task
