import React from 'react'
import {
	View, ScrollView,
} from 'react-native'

// Components
import Task from '../../components/task'

// Functions
import useTasks from '../../hooks/useTasks'

function Filter() {
	const { tasks, toggleTaskDone, deleteTask } = useTasks()

	return (
		<View style={{ flex: 1, padding: 10, backgroundColor: '#eee' }}>
			<ScrollView>
				{tasks.map((task) => (
					<Task
						key={task.id}
						handleToggleTaskDone={toggleTaskDone}
						handleDeleteTask={deleteTask}
						handleUpdateTask={() => {}}
						{...task}
					/>
				))}
			</ScrollView>
		</View>
	)
}

export default Filter
