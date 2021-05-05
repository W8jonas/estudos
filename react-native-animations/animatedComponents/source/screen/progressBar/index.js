import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// Assets
import levelUpConfetti from './assets/level-up-confetti-animation.json'
import upLevelStart from './assets/level-up-start.json'

export function ProgressBar() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.container}>
				<LottieView source={levelUpConfetti} autoPlay loop />
				<Text style={styles.textLevel}>Parabéns!! Você upou para o próximo level!</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	container: {
		width: '80%',
		height: '70%',
		alignItems: 'center',
		borderRadius: 40,
		padding: 10,
		backgroundColor: '#FFF',
	},
	textLevel: {
		fontSize: 16,
		paddingTop: 10,
	},
})
