import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		borderRadius: 22,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 5,
		alignItems: 'center',
	},
	textInput: {
		width: '70%',
	},
	touchCalendar: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ccc',
		marginHorizontal: 5,
		padding: 5,
		height: 30,
	},
	touchTypeOfTask: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eaebee',
		width: '20%',
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
