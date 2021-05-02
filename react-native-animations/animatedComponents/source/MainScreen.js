import React from 'react'
import {
	View, Text, TouchableOpacity, StyleSheet,
} from 'react-native'

export function MainScreen({ navigation }) {
	return (
		<View style={styles.container}>

			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('DownloadButton')}
			>
				<Text style={styles.buttonContent}>DownloadButton</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('ProgressBar')}
			>
				<Text style={styles.buttonContent}>ProgressBar</Text>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		flexWrap: 'wrap',
		backgroundColor: '#FFF',
	},
	buttonContainer: {
		width: 140,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		marginLeft: 20,
		borderRadius: 16,
		backgroundColor: '#E1E2E7',
	},
	buttonContent: {
		fontSize: 16,
		color: '#1E1E1F',
	},
})
