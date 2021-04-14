const INITIAL_STATE = [
	{
		id: 0,
		description: 'Arrumar quarto',
		type: 'Pessoal',
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

function todoReducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case 'RESET': {
			return INITIAL_STATE
		}

		case 'SYNC_TODOS': {
			return payload
		}

		default:
			return state
	}
}

export { todoReducer }
