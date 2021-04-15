import React from 'react'
import { View, Text } from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// assets
import downloadAnimation from './assets/download-ongoing.json'
import styles from './styles'

function DownloadButton() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.buttonContainer}>
				<View style={styles.iconContainer}>
					<LottieView source={downloadAnimation} autoPlay loop speed={3} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.textContent}>Downloading</Text>
				</View>
			</View>
		</View>
	)
}

export default DownloadButton
