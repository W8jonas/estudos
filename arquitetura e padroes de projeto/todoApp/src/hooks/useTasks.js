import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

function useTasks(queryParamsToFilter) {
	const dispatch = useDispatch()
	const globalTasks = useSelector((state) => state)

	const [tasks, setTasks] = useState(globalTasks)
	const [tasksFiltered, setTasksFiltered] = useState(globalTasks)

	useEffect(() => {
		setTasks(globalTasks)
		console.log('globalTasks: ', globalTasks)
	}, [globalTasks])

	useEffect(() => {
		if (queryParamsToFilter) {
			_getTasksFiltered(queryParamsToFilter, tasks)
		}
	}, [queryParamsToFilter, tasks])

	function addTask(taskToAdd) {
		const date = taskToAdd.taskDate || new Date().getTime()

		const newTask = {
			id: Math.random(),
			type: taskToAdd.taskType,
			description: taskToAdd.description,
			date,
			done: false,
		}
		const newTasks = [...tasks, newTask]
		dispatch({ type: 'SYNC_TODOS', payload: newTasks })
	}

	function toggleTaskDone(id) {
		const taskSelected = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					done: !task.done,
				}
			}
			return task
		})
		dispatch({ type: 'SYNC_TODOS', payload: taskSelected })
	}

	function deleteTask(id) {
		const newTasks = tasks.filter((task) => task.id !== id)

		dispatch({ type: 'SYNC_TODOS', payload: newTasks })
	}

	function updateTask(taskToUpdate) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === taskToUpdate.id) {
				console.log('task atual:', task)
				console.log('task atualizada:', taskToUpdate)
				return {
					...task,
					type: taskToUpdate.taskType,
					description: taskToUpdate.description,
					date: taskToUpdate.date,
				}
			}
			return task
		})
		dispatch({ type: 'SYNC_TODOS', payload: updatedTasks })
	}

	function _getTasksFiltered(query, tasks) {
		if (query.length) {
			const newTasks = tasks.filter((task) => query.includes(task.type))
			setTasksFiltered(newTasks)
		}
		setTasksFiltered(tasks)
	}

	return {
		tasks, tasksFiltered, addTask, toggleTaskDone, deleteTask, updateTask,
	}
}

export default useTasks
