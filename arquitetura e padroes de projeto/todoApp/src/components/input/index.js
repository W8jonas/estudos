import React, { useState, useEffect, useRef } from 'react'
import {
	View, Text, TouchableOpacity, TextInput, Animated, Easing, Dimensions,
} from 'react-native'

// Modules
import PropTypes from 'prop-types'
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

function Input({ addTask, taskToUpdate }) {
	const inputRef = useRef(null)
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [showSelectPicker, setShowSelectPicker] = useState(false)

	const [taskDate, setTaskDate] = useState(undefined)
	const [taskType, setTaskType] = useState('Pessoal')
	const [description, setDescription] = useState(undefined)

	const [opacity] = useState(new Animated.Value(widthOfContainer / 2))

	function focusInput() {
		inputRef.current.focus()
	}

	function blurInput() {
		inputRef.current.blur()
	}

	function submitTask() {
		const task = { taskDate, taskType, description }
		addTask(task)
	}

	function onKeyPress({ nativeEvent }) {
		const { key } = nativeEvent
		if (key === ' ') {
			counter += 1
			setTimeout(() => {
				if (counter >= 3) {
					submitTask()
				}
				counter = 0
			}, 500)
		}
	}

	function show() {
		opacity.setValue(0)
		Animated.timing(opacity, {
			toValue: 1,
			useNativeDriver: false,
			delay: 200,
			duration: 300,
			easing: Easing.linear,
		}).start()
	}

	useEffect(() => {
		focusInput()
		show()
	}, [])

	useEffect(() => {
		if (taskToUpdate) {
			setDescription(taskToUpdate.description)
			setTaskDate(taskToUpdate.date)
			setTaskType(taskToUpdate.type)
		}
	}, [taskToUpdate])

	const posWidth = opacity.interpolate({
		inputRange: [0, 1],
		outputRange: [widthOfContainer / 2, widthOfContainer],
	})

	const animatedStyle = [
		styles.container,
		{ width: posWidth },
	]

	return (
		<>
			<Animated.View style={animatedStyle}>
				<TextInput
					style={styles.textInput}
					multiline
					ref={inputRef}
					onChangeText={(text) => setDescription(text)}
					placeholder="Aperte espaço 3x para salvar"
					value={description}
					onKeyPress={onKeyPress}
				/>

				<Animated.View style={{ flexDirection: 'row', opacity }}>
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

Input.propTypes = {
	addTask: PropTypes.func.isRequired,
	taskToUpdate: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			id: PropTypes.number,
			description: PropTypes.string,
			type: PropTypes.string,
			date: PropTypes.number,
			done: PropTypes.bool,
		}),
	]),
}

Input.defaultProps = {
	taskToUpdate: false,
}

export default Input
