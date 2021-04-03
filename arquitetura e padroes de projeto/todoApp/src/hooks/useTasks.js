import { useState } from 'react'

function useTasks() {
	const [tasks, setTasks] = useState([])

	function addTask(taskToAdd) {
		setTasks([...tasks, taskToAdd])
	}

	return { tasks, addTask }
}

export default useTasks
