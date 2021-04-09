import React from 'react'
import {
	View, ScrollView, TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

			<TouchableOpacity style={{
				position: 'absolute',
				height: 60,
				width: 60,
				backgroundColor: '#F80',
				borderRadius: 60,
				bottom: 50,
				right: 50,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			>
				<Icon name="filter-plus-outline" size={30} color="#000" />
			</TouchableOpacity>
		</View>
	)
}

export default Filter
