import { useState, useEffect } from 'react'

const FAKE_DATA = [
	{
		id: '0',
		description: 'Arrumar quarto',
		type: '',
		data: new Date('2021/03/29').getTime(),
		done: false,
	},
	{
		id: '1',
		description: 'Terminar aplicativo',
		type: 'programação',
		data: new Date('2021/04/16').getTime(),
		done: false,
	},
	{
		id: '2',
		description: 'Fazer componente Tarefa',
		type: 'programação',
		data: new Date('2021/03/27').getTime(),
		done: true,
	},
	{
		id: '3',
		description: 'Estudar prova de Equações Diferenciais',
		type: 'Faculdade',
		data: new Date('2021/04/11').getTime(),
		done: false,
	},
]

function useTasks() {
	const [tasks, setTasks] = useState(FAKE_DATA)

	function addTask(taskToAdd) {
		setTasks([...tasks, taskToAdd])
	}

	return { tasks, addTask }
}

export default useTasks
