import React, { useState } from 'react'
import { View, Text } from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// assets
import completedDownloadAnimation from './assets/check-blue.json'
import downloadAnimationBlack from './assets/download-ongoingBlack.json'
import downloadAnimationwhite from './assets/download-ongoingWhite.json'
import styles from './styles'

function DownloadButton() {
	const [animationGlobal, setAnimationGlobal] = useState(0)

	const AnimationIcon = () => (
		animationGlobal === 0
			? <LottieView source={downloadAnimationBlack} progress={0.58} />
			: animationGlobal === 1
				? <LottieView source={downloadAnimationwhite} autoPlay loop speed={3} />
				: <LottieView source={completedDownloadAnimation} autoPlay loop={false} speed={1} style={styles.animationContent} />
	)

	const TextContent = () => (
		animationGlobal === 0
			? <Text style={styles.textContent}>Download</Text>
			: animationGlobal === 1
				? <Text style={styles.textContent}>Downloading</Text>
				: <Text style={styles.textContent}>Finished</Text>
	)

	return (
		<View style={styles.screenContainer}>
			<View style={styles.buttonContainer}>
				<View style={styles.iconContainer}>
					<AnimationIcon />
				</View>
				<View style={styles.textContainer}>
					<TextContent />
				</View>
			</View>
		</View>
	)
}

export default DownloadButton
