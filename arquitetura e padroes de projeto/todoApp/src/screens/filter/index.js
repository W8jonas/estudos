import React, { useState, useEffect } from 'react'
import {
	View, Text, TouchableOpacity, ScrollView,
} from 'react-native'

// Components
import Task from '../../components/task'

// Functions
import useTasks from '../../hooks/useTasks'

function Filter() {
	const {
		tasks, addTask, toggleTaskDone, deleteTask, updateTask,
	} = useTasks()

	return (
		<View>
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
