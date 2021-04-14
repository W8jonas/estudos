import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../styles'

const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
		position: 'absolute',
		left: -10,
		bottom: 0,
		backgroundColor: '#FFF',
		alignItems: 'center',
		padding: 10,
	},
	title: {
		fontSize: 18,
		marginTop: 5,
	},
	datePickerContainer: {
		width: screenWidth,
		alignSelf: 'center',
		marginVertical: 10,
	},
})

export default styles
