import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	buttonContainer: {
		height: 80,
		width: 300,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 12,
		paddingHorizontal: 50,
		backgroundColor: '#fff',
	},
	iconContainer: {
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
	},
	textContent: {
		fontSize: 20,
	},
})

export default styles
