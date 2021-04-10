const INITIAL_STATE = [
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
