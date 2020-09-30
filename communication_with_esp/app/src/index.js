import React from 'react'
import { View, Text, StyleSheet, PlatformColor } from 'react-native'


export default function App() {

	const arrayRandomico = [13, 2, 43, 53, 123, 12, 22]

  return (
    <View styles={styles.container}>
		<View styles={{backgroundColor: PlatformColor('?attr/colorButtonNormal')}}>
			<Text>
				Hello App!
			</Text>
		</View>


		<View styles={styles.bottomContainer}>
			<Text>
			Histórico de valores recebidos
			</Text>

			{
			arrayRandomico.map(item=>(
				<Text>{item}</Text>
			))}

		</View>
    </View>
  )
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topContainer: {
		backgroundColor: '#234'
	},
	bottomContainer: {
		backgroundColor: '#534'
	},
})