import { StyleSheet, Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const widthContainer = screenWidth - 2 * 10

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 22,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 5,
	},
	textInput: {
		width: widthContainer * 0.6,
	},
	touchCalendar: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ccc',
		marginHorizontal: 5,
		padding: 5,
		height: 30,
		// width: 40,
		width: widthContainer * 0.1,
	},
	touchTypeOfTask: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eaebee',
		width: widthContainer * 0.23,
		height: 30,
	},
	circle: {
		height: 12,
		width: 12,
		borderRadius: 12,
		borderColor: '#F60',
		borderWidth: 2,
	},
})

export default styles
