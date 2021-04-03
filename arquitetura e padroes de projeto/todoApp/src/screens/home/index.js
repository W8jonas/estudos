import React, { useState } from 'react'
import {
	Text, View, TouchableOpacity, ScrollView,
} from 'react-native'

// Modules

// Assets
import styles from './styles'

// Components
import Input from '../../components/input'
import Task from '../../components/task'

// Functions
import useTasks from '../../hooks/useTasks'

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
	const [focusOnInput, setFocusOnInput] = useState(false)

	const { tasks, addTask } = useTasks()

	function handleAddTask(taskToAdd) {
		setFocusOnInput(false)
		console.log('task: ', taskToAdd)
		addTask(taskToAdd)
	}

	return (
		<View style={styles.container}>

			<ScrollView>
				{FAKE_DATA.map((task) => (
					<Task key={task.id} {...task} />
				))}
			</ScrollView>

			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				{focusOnInput
					? <Input handleAddTask={handleAddTask} />
					: (
						<TouchableOpacity
							style={styles.touchContainer}
							onPress={() => setFocusOnInput(true)}
						>
							<Text>Digite uma nova tarefa</Text>
						</TouchableOpacity>
					)
				}
			</View>
		</View>
	)
}

export default Home
