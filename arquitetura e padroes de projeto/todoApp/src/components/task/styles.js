import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: '#FFF',
		elevation: 4,
		borderBottomWidth: 2,
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		borderRadius: 30,
		marginTop: 10,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		borderColor: '#f60',
		backgroundColor: '#Fa0',
	},
	textDescription: {
		width: '70%',
	},
	textDate: {
		width: '20%',
	},
})

export default styles
