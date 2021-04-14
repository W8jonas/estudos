import React, { useEffect, useState } from 'react'
import {
	Text, TouchableOpacity, Animated, Easing, Dimensions,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'

// Assets
import styles from './styles'

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'
import Circle from '../circle/index'

const { height: screenHeight } = Dimensions.get('window')
const heightOfContainer = screenHeight * 0.45

function SelectPiker({ visible, selectItem }) {
	const [pos] = useState(new Animated.Value(heightOfContainer))

	function show() {
		Animated.timing(pos, {
			toValue: 0,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	function hide() {
		Animated.timing(pos, {
			toValue: heightOfContainer,
			useNativeDriver: true,
			duration: 200,
			easing: Easing.linear,
		}).start()
	}

	useEffect(() => {
		if (visible) {
			show()
		} else {
			hide()
		}
	}, [visible])

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
					onPress={() => selectItem(item)}
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

SelectPiker.propTypes = {
	selectItem: PropTypes.func.isRequired,
	visible: PropTypes.bool.isRequired,
}

export default SelectPiker
