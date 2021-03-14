import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Modules

// Assets

// Functions

// Components

function Home() {
	return (
		<View style={{ padding: 10, flex: 1, backgroundColor: '#FFF' }}>

			<View style={{
				width: '100%',
				height: 60,
				backgroundColor: '#FCF',
				elevation: 9,
				borderBottomWidth: 3,
				borderBottomColor: '#ccc',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 15,
				borderRadius: 30,
			}}
			>

				<Text>Descrição</Text>
				<Text>Data</Text>
			</View>

		</View>
	)
}

export default Home
