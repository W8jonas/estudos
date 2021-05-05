import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// Assets
import levelUpConfetti from './assets/level-up-confetti-animation.json'

// Components
import { ProgressBar } from './ProgressBar'

export function LevelUpCard() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.container}>
				<Text style={styles.textLevelTitle}>Parabéns!!</Text>
				<Text style={styles.textLevelCaption}> Você alcançou o próximo level!</Text>
				<LottieView style={styles.animationContainer} source={levelUpConfetti} autoPlay loop={false} />
				<ProgressBar />
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
	animationContainer: {
		height: 330,
	},
	textLevelTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingTop: 10,
	},
	textLevelCaption: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 10,
	},
})
