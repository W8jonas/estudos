import React from 'react'
import {
	View, Modal, Text, Dimensions, TouchableOpacity,
} from 'react-native'

// Modules

const { height: screenHeight } = Dimensions.get('window')

const TYPES_AND_COLORS = {
	programação: '#f60',
	Faculdade: '#848',
	trabalho: '#283',
	pessoal: '#45c',
}

function SelectPiker(props) {
	return (
		<Modal
			onRequestClose={() => props.onCancel()}
			animationType="slide"
			transparent
			visible={props.visible}
		>
			<View style={{ height: screenHeight * 0.5 }} />

			<View style={{
				height: screenHeight * 0.5, backgroundColor: '#FFF', alignItems: 'center',
			}}
			>
				<Text>Selecione o tipo da tarefa</Text>

				{Object.keys(TYPES_AND_COLORS).map((item) => (
					<TouchableOpacity key={item}>
						<View style={{
							height: 12, width: 12, borderRadius: 12, borderColor: TYPES_AND_COLORS[item], borderWidth: 2,
						}}
						/>
						<Text>{item}</Text>
					</TouchableOpacity>
				))}
			</View>
		</Modal>
	)
}

export default SelectPiker
