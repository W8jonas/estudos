import React from 'react'
import {
	View, Modal, Text, TouchableOpacity,
} from 'react-native'

// Assets
import { colors } from '../../styles'
import styles from './styles'

// Components
import Circle from '../circle/index'

const TYPES_AND_COLORS = {
	Programação: '#f60',
	Faculdade: '#848',
	Trabalho: '#283',
	Pessoal: '#45c',
}

function SelectPiker(props) {
	return (
		<Modal
			onRequestClose={() => props.onCancel()}
			animationType="slide"
			transparent
			visible={props.visible}
		>
			<View style={styles.transparentContainer} />

			<View style={styles.container}>
				<Text style={styles.title}>Selecione o tipo da tarefa</Text>

				{Object.keys(TYPES_AND_COLORS).map((item) => (
					<TouchableOpacity
						key={item}
						style={styles.selectItem}
					>
						<Circle color={TYPES_AND_COLORS[item]} size={20} />
						<Text style={styles.selectText}>{item}</Text>
					</TouchableOpacity>
				))}
			</View>
		</Modal>
	)
}

export default SelectPiker
