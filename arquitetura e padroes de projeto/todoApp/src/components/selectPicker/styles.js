import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../styles'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: -10,
		bottom: 0,
		width: screenWidth,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		marginTop: 5,
	},
	selectItem: {
		height: screenHeight * 0.07,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 40,
		backgroundColor: '#0202',
		width: '100%',
		margin: 10,
	},
	selectText: {
		marginLeft: 20,
		fontSize: 20,
		color: colors.blackDark,
	},
})

export default styles
