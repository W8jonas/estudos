import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: colors.fullWhite,
		elevation: 4,
		borderBottomWidth: 2,
		borderBottomColor: colors.greySolid,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		borderRadius: 30,
		marginTop: 5,
		marginBottom: 5,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		marginLeft: 10,
	},
	checkCircle: {
		height: 30,
		width: 30,
		borderRadius: 30,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.whiteDefault,
		backgroundColor: colors.whiteDefault,
	},
	textDescription: {
		width: '70%',
	},
	textDate: {
		width: '30%',
	},
	editTaskContainer: {
		height: 60,
		width: 90,
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: '#499',
		borderTopEndRadius: 30,
		borderBottomRightRadius: 30,
	},
	editTaskTouch: {
		height: 60,
		width: 90,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopEndRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: '#499',
	},
	deleteTaskContainer: {
		height: 60,
		width: 90,
		position: 'absolute',
		top: 0,
		right: 90,
		backgroundColor: '#f79',
	},
	deleteTaskTouch: {
		height: 60,
		width: 90,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f79',
	},
	textExtraOptions: {
		color: '#FFF',
		fontSize: 18,
	},
})

export default styles
