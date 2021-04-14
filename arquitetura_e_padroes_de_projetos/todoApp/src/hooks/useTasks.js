import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

function useTasks(queryParamsToFilter) {
	const dispatch = useDispatch()
	const globalTasks = useSelector((state) => state)

	const [tasks, setTasks] = useState(globalTasks)
	const [tasksFiltered, setTasksFiltered] = useState(globalTasks)

	useEffect(() => {
		setTasks(globalTasks)
	}, [globalTasks])

	useEffect(() => {
		if (queryParamsToFilter) {
			const newTasks = _getTasksFiltered(queryParamsToFilter, tasks)
			setTasksFiltered(newTasks)
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

	function _getTasksFiltered(query, tasksToFilter) {
		if (query.length) {
			const newTasks = tasksToFilter.filter((task) => query.includes(task.type))
			return newTasks
		}
		return tasksToFilter
	}

	return {
		tasks, tasksFiltered, addTask, toggleTaskDone, deleteTask, updateTask,
	}
}

export default useTasks