import { StyleSheet, Dimensions } from 'react-native'

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

})

export default styles
