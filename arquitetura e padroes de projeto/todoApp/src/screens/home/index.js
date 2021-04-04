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

function Home() {
	const [focusOnInput, setFocusOnInput] = useState(false)

	const { tasks, addTask } = useTasks()

	function handleAddTask(taskToAdd) {
		setFocusOnInput(false)
		addTask(taskToAdd)
	}

	return (
		<View style={styles.container}>

			<ScrollView>
				{tasks.map((task) => (
					<Task key={task.id} {...task} />
				))}
			</ScrollView>

			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				{focusOnInput
					? <Input addTask={handleAddTask} />
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
