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
				alignItems: 'center',
				paddingHorizontal: 15,
				borderRadius: 30,
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

		</View>
	)
}

export default Home
