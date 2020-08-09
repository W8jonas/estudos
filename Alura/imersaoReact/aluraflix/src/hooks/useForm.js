import {useState} from 'react';

function useForm(initialFormState) {
	const [data, setData] = useState(initialFormState)

	function handleChange(event) {
		const chave = event.target.getAttribute('name')
		const valor = event.target.value
		setData({
			...data,
			[chave]: valor
		})
	}

	function clearForm() {
		setData(initialFormState)
	}

	return {
		handleChange,
		data,
		clearForm
	}
}

export default useForm