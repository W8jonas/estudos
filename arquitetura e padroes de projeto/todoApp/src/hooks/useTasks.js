import { useState, useEffect } from 'react'

const InitialState = [
	{
		id: 0,
		description: 'Arrumar quarto',
		type: '',
		date: new Date('2021/03/29').getTime(),
		done: false,
	},
	{
		id: 1,
		description: 'Terminar aplicativo',
		type: 'Programação',
		date: new Date('2021/04/16').getTime(),
		done: false,
	},
	{
		id: 2,
		description: 'Fazer componente Tarefa',
		type: 'Programação',
		date: new Date('2021/03/27').getTime(),
		done: true,
	},
	{
		id: 3,
		description: 'Estudar prova de Equações Diferenciais',
		type: 'Faculdade',
		date: new Date('2021/04/11').getTime(),
		done: false,
	},
]

function useTasks() {
	const [tasks, setTasks] = useState(InitialState)

	function addTask(taskToAdd) {
		const date = taskToAdd.taskDate || new Date().getTime()

		const newTask = {
			id: Math.random(),
			type: taskToAdd.taskType,
			description: taskToAdd.description,
			date,
			done: false,
		}
		setTasks([...tasks, newTask])
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
		setTasks(taskSelected)
	}

	function deleteTask(id) {
		const newTasks = tasks.filter((task) => task.id !== id)

		setTasks(newTasks)
	}

	return {
		tasks, addTask, toggleTaskDone, deleteTask,
	}
}

export default useTasks
