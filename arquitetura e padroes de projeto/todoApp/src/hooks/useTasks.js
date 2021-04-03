import { useState } from 'react'

function useTasks() {
	const [task, setTask] = useState()

	return { task }
}

export default useTasks
