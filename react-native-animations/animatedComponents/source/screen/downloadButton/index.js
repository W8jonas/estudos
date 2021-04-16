import React, { useState } from 'react'
import {
	View, Text, TouchableOpacity, Animated, Easing,
} from 'react-native'

// Modules
import LottieView from 'lottie-react-native'

// assets
import completedDownloadAnimation from './assets/download-check.json'
import downloadAnimationBlack from './assets/download-ongoingBlack.json'
import downloadAnimationwhite from './assets/download-ongoingWhite.json'
import { styles, animatedStyles } from './styles'

function DownloadButton() {
	const [animationGlobal, setAnimationGlobal] = useState(0)
	const [greenBackground] = useState(new Animated.Value(0))
	const [blueBackground] = useState(new Animated.Value(0))

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
		Animated.parallel([
			Animated.timing(greenBackground, {
				toValue: 0,
				easing: Easing.linear(),
				duration: 0,
				useNativeDriver: false,
			}),
			Animated.timing(blueBackground, {
				toValue: 0,
				easing: Easing.linear(),
				duration: 0,
				useNativeDriver: false,
			}),
		]).start()
		  setAnimationGlobal(0)
	}

	function animationToDownloading() {
		Animated.timing(greenBackground, {
			toValue: 80,
			easing: Easing.linear(),
			duration: 300,
			useNativeDriver: false,
		}).start()
		setAnimationGlobal(1)

		// for debug purposes
		setTimeout(() => {
			setAnimationTransition(2)
		}, 3000)
	}

	function animationToFinished() {
		Animated.timing(blueBackground, {
			toValue: 80,
			easing: Easing.linear(),
			duration: 300,
			useNativeDriver: false,
		}).start()
		setAnimationGlobal(2)

		// for debug purposes
		setTimeout(() => {
			setAnimationTransition(0)
		}, 3000)
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
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => setAnimationTransition(1)}
				activeOpacity={0.8}
			>
				<View style={styles.iconContainer}>
					<AnimationIcon />
				</View>
				<View style={styles.textContainer}>
					<TextContent />
				</View>

				<>
					<Animated.View
						style={[
							animatedStyles.greenBackground,
							{ height: greenBackground },
						]}
					/>

					<Animated.View
						style={[
							animatedStyles.blueBackground,
							{ height: blueBackground },
						]}
					/>
				</>
			</TouchableOpacity>
		</View>
	)
}

export default DownloadButton
