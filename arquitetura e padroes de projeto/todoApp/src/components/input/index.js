import React, { useState, useRef } from 'react'
import {
	View, Text, TouchableOpacity, TextInput, Animated, Easing, Dimensions,
} from 'react-native'

// Modules
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Assets
import { colors } from '../../styles'
import styles from './styles'

// Components
import { TYPES_AND_COLORS } from '../../configs/constants'
import Circle from '../circle/index'
import SelectDatePicker from '../selectDatePicker/index'
import SelectPicker from '../selectPicker/index'

const { width: screenWidth } = Dimensions.get('window')
const widthOfContainer = screenWidth - 2 * 10

let counter = 0

function Input() {
	const inputRef = useRef(null)
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [showSelectPicker, setShowSelectPicker] = useState(false)

	const [taskDate, setTaskDate] = useState(undefined)
	const [taskType, setTaskType] = useState('Pessoal')
	const [description, setDescription] = useState(undefined)

	const [posWidth] = useState(new Animated.Value(widthOfContainer / 2))

	function focusInput() {
		inputRef.current.focus()
	}

	function blurInput() {
		inputRef.current.blur()
	}

	function createTask() {
		console.log({ taskDate, taskType, description })
	}

	function onKeyPress({ nativeEvent }) {
		const { key } = nativeEvent
		if (key === ' ') {
			counter += 1
			setTimeout(() => {
				if (counter >= 3) {
					createTask()
				}
				counter = 0
			}, 500)
		}
	}

	return (
		<>
			<Animated.View
				style={[
					styles.container,
					{ width: widthOfContainer },
				]}
			>
				<TextInput
					style={styles.textInput}
					multiline
					ref={inputRef}
					onChangeText={(text) => setDescription(text)}
					placeholder="Aperte espaço 3x para salvar"
					onKeyPress={onKeyPress}
				/>

				<TouchableOpacity
					style={styles.touchCalendar}
					onPress={() => {
						blurInput()
						setShowDatePicker(true)
					}}
				>
					<Icon name="calendar-today" size={20} color={colors.grayDark} />
					{taskDate && (
						<Circle size={6} color="#68f" extraStyle={{ position: 'absolute', top: 3, right: 3 }} />
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.touchTypeOfTask}
					onPress={() => {
						blurInput()
						setShowSelectPicker(true)
					}}
				>
					<Circle size={12} color={TYPES_AND_COLORS[taskType]} />
					<Text style={styles.textTypeOfTask}>{taskType}</Text>
					<IconAwesome name="chevron-down" size={15} color={colors.blackDark} />
				</TouchableOpacity>
			</Animated.View>

			<SelectDatePicker
				onCancel={() => setShowDatePicker(false)}
				setDate={(date) => {
					setShowDatePicker(false)
					setTaskDate(date)
					focusInput()
				}}
				visible={showDatePicker}
			/>

			<SelectPicker
				onCancel={() => setShowSelectPicker(false)}
				selectItem={(item) => {
					setShowSelectPicker(false)
					setTaskType(item)
					focusInput()
				}}
				visible={showSelectPicker}
			/>
		</>
	)
}

export default Input
