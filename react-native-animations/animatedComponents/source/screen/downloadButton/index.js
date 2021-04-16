import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// assets
import completedDownloadAnimation from './assets/check-blue.json'
import downloadAnimationBlack from './assets/download-ongoingBlack.json'
import downloadAnimationwhite from './assets/download-ongoingWhite.json'
import styles from './styles'

function DownloadButton() {
	const [animationGlobal, setAnimationGlobal] = useState(0)

	function setAnimationTransition(nextAnimationState) {
		if (nextAnimationState === 0) {
			animationToReset()
		}
		if (nextAnimationState === 1) {
			animationToDownloading()
		}

		if (nextAnimationState === 2) {
			animationToFinished()
		}
	}

	function animationToReset() {

	}

	function animationToDownloading() {

	}

	function animationToFinished() {

	}

	const AnimationIcon = () => (
		animationGlobal === 0
			? <LottieView source={downloadAnimationBlack} progress={0.58} />
			: animationGlobal === 1
				? <LottieView source={downloadAnimationwhite} autoPlay loop speed={3} />
				: <LottieView source={completedDownloadAnimation} autoPlay loop={false} speed={1} style={styles.animationContent} />
	)

	const TextContent = () => (
		animationGlobal === 0
			? <Text style={styles.textContentDownload}>Download</Text>
			: animationGlobal === 1
				? <Text style={styles.textContentDownloading}>Downloading</Text>
				: <Text style={styles.textContentFinished}>Finished</Text>
	)

	return (
		<View style={styles.screenContainer}>
			<TouchableOpacity style={styles.buttonContainer} onPress={() => setAnimationTransition(1)} activeOpacity={0.8}>
				<View style={styles.iconContainer}>
					<AnimationIcon />
				</View>
				<View style={styles.textContainer}>
					<TextContent />
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default DownloadButton
