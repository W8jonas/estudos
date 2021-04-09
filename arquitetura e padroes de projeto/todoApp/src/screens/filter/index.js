import React from 'react'
import {
	View, ScrollView, TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Assets
import styles from '../../components/task/styles'

// Components
import FilterTask from '../../components/filterTask'
import Task from '../../components/task'

// Functions
import useTasks from '../../hooks/useTasks'

function Filter() {
	const { tasks, toggleTaskDone, deleteTask } = useTasks()

	return (
		<View style={styles.container}>
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

			<FilterTask />

			<TouchableOpacity
				style={styles.touchContainer}
				activeOpacity={0.7}
			>
				<Icon name="filter-plus-outline" size={30} color="#000" />
			</TouchableOpacity>
		</View>
	)
}

export default Filter
