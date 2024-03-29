import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../styles'

const { width: screenWidth } = Dimensions.get('window')

const widthContainer = screenWidth - 2 * 10

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.fullWhite,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 22,
		paddingHorizontal: 5,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	textInput: {
		width: widthContainer * 0.49,
	},
	touchCalendar: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.whiteMetallic,
		marginHorizontal: 5,
		borderRadius: 12,
		padding: 5,
		height: 30,
		width: 30,
	},
	touchTypeOfTask: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.whiteMetallic,
		paddingHorizontal: 5,
		borderRadius: 12,
		width: widthContainer * 0.38,
		height: 30,
	},
	circle: {
		height: 12,
		width: 12,
		borderRadius: 12,
		borderColor: colors.whiteDefault,
		borderWidth: 2,
	},
	textTypeOfTask: {
		fontSize: 16,
		color: colors.grayDark,
	},
})

export default styles
