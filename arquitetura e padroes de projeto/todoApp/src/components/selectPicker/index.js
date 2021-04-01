import React from 'react'
import {
	View, Modal, Text, TouchableOpacity, Animated, Easing, Dimensions,
} from 'react-native'

// Assets
import styles from './styles'

// Components
import Circle from '../circle/index'

const TYPES_AND_COLORS = {
	Programação: '#f60',
	Faculdade: '#848',
	Trabalho: '#283',
	Pessoal: '#45c',
}
const { height: screenHeight, width: screenWidth } = Dimensions.get('window')
const heightOfContainer = screenHeight * 0.45

function SelectPiker(props) {
	const pos = new Animated.Value(0)

	return (
		<Animated.View
			style={[
				styles.container,
				{ transform: [{ translateY: pos }] },
			]}
		>
			<Text style={styles.title}>Selecione o tipo da tarefa</Text>

			{Object.keys(TYPES_AND_COLORS).map((item) => (
				<TouchableOpacity
					onPress={() => props.selectItem(item)}
					key={item}
					style={styles.selectItem}
				>
					<Circle color={TYPES_AND_COLORS[item]} size={20} />
					<Text style={styles.selectText}>{item}</Text>
				</TouchableOpacity>
			))}
		</Animated.View>
	)
}

export default SelectPiker
