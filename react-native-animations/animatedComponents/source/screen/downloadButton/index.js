import React from 'react'
import { View, Text } from 'react-native'

// assets
import styles from './styles'

function DownloadButton() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.buttonContainer}>
				<Text style={styles.iconContainer}>Icone</Text>
				<View style={styles.textContainer}>
					<Text style={styles.textContent}>Downloading</Text>
				</View>
			</View>
		</View>
	)
}

export default DownloadButton
