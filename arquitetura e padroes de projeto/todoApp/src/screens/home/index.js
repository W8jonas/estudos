import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Modules

// Assets

// Functions

// Components
import Task from '../../components/task'

function Home() {
	return (
		<View style={{ padding: 10, flex: 1, backgroundColor: '#eee' }}>

			<Task />
			<Task />
			<Task />
			<Task />

		</View>
	)
}

export default Home
