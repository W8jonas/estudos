import React, { useState, useEffect } from 'react'
import {
	View, Text, TouchableOpacity, ScrollView,
} from 'react-native'

// Modules

// Assets

// Functions

// Components
import Input from '../../components/input'
import Task from '../../components/task'

const FAKE_DATA = [
	{
		id: '0',
		description: 'Arrumar quarto',
		type: '',
		data: new Date('2021/03/29').getTime(),
		done: false,
	},
	{
		id: '1',
		description: 'Terminar aplicativo',
		type: 'programação',
		data: new Date('2021/04/16').getTime(),
		done: false,
	},
	{
		id: '2',
		description: 'Fazer componente Tarefa',
		type: 'programação',
		data: new Date('2021/03/27').getTime(),
		done: true,
	},
	{
		id: '3',
		description: 'Estudar prova de Equações Diferenciais',
		type: 'Faculdade',
		data: new Date('2021/04/11').getTime(),
		done: false,
	},
]

function Home() {
	return (
		<View style={{ padding: 10, flex: 1, backgroundColor: '#eee' }}>

			<ScrollView>
				{FAKE_DATA.map((task) => (
					<Task key={task.id} {...task} />
				))}
			</ScrollView>

			<Input />
		</View>
	)
}

export default Home
