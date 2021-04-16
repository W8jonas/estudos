import { StyleSheet } from 'react-native'

import { colors } from './colors'

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
		paddingHorizontal: 60,
		backgroundColor: '#fff',
		zIndex: 1,
	},
	iconContainer: {
		height: 40,
		width: 40,
		zIndex: 3,
	},
	animationContent: {
		height: 89,
		width: 89,
		position: 'relative',
		top: -12,
		left: -12,
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		zIndex: 3,
	},
	textContentDownload: {
		fontSize: 22,
		fontWeight: 'bold',
		color: colors.black,
	},
	textContentDownloading: {
		fontSize: 22,
		fontWeight: 'bold',
		color: colors.white,
	},
	textContentFinished: {
		fontSize: 22,
		fontWeight: 'bold',
		color: colors.white,
	},
})

const animatedStyles = StyleSheet.create({
	greenBackground: {
		...styles.buttonContainer,
		position: 'absolute',
		top: 0,
		zIndex: 2,
		backgroundColor: colors.green,
	},
	blueBackground: {
		...styles.buttonContainer,
		position: 'absolute',
		top: 0,
		zIndex: 2,
		backgroundColor: colors.blue,
	},
	progressBar: {
		marginHorizontal: 5,
		height: 5,
		width: 0,
		position: 'absolute',
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
		bottom: 0,
		zIndex: 2,
		backgroundColor: colors.lightGreen,
	},
})

export { styles, animatedStyles }
