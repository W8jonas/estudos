import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../styles'

const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: screenWidth,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		marginTop: 5,
	},
	datePickerContainer: {
		width: 400,
		alignSelf: 'center',
		marginVertical: 20,
	},
	selectText: {
		marginLeft: 20,
		fontSize: 20,
		color: colors.blackDark,
	},
})

export default styles
