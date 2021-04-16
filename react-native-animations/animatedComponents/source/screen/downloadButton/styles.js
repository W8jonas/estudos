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
		paddingHorizontal: 50,
		backgroundColor: '#fff',
	},
	iconContainer: {
		height: 40,
		width: 40,
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
	},
	textContentDownload: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.black,
	},
	textContentDownloading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.white,
	},
	textContentFinished: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.white,
	},
})

const animatedStyles = StyleSheet.create({
	greenBackground: {
		...styles.buttonContainer,
		position: 'absolute',
		top: 0,
		backgroundColor: colors.green,
	},
})

export { styles, animatedStyles }
