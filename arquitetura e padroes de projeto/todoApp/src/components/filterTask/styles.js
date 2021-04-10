import { StyleSheet, Dimensions } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		width: screenWidth,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	title: {
		marginTop: 10,
		fontSize: 18,
	},
	caption: {
		fontSize: 16,
		marginTop: 10,
	},
	typesToSelectContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		marginTop: 20,
	},
	selectItem: {
		borderRadius: 8,
		padding: 5,
	},
	selectText: {
		fontSize: 15,
		color: '#FFF',
	},
	exitButton: {
		width: '50%',
		backgroundColor: '#F66',
		borderRadius: 30,
		marginVertical: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',

	},
	textExitButton: {
		fontSize: 18,
		color: '#FFF',
	},
})

export default styles
