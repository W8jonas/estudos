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
	const [taskToUpdate, setTaskToUpdate] = useState(false)

	const {
		tasks, addTask, toggleTaskDone, deleteTask,
	} = useTasks()

	function handleAddTask(taskToAdd) {
		setFocusOnInput(false)
		addTask(taskToAdd)
	}

	function updateTask(task) {
		setTaskToUpdate(task)
		setFocusOnInput(true)
	}

	return (
		<View style={styles.container}>

			<ScrollView>
				{tasks.map((task) => (
					<Task
						key={task.id}
						handleToggleTaskDone={toggleTaskDone}
						handleDeleteTask={deleteTask}
						handleUpdateTask={updateTask}
						{...task}
					/>
				))}
			</ScrollView>

			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				{focusOnInput
					? <Input addTask={handleAddTask} taskToUpdate={taskToUpdate} />
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
