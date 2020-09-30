import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function App() {

	const arrayRandomico = [13, 2, 43, 53, 123, 12, 22]
	const [isConnected, setIsConnected] = useState(false)
	const [actualValue, setActualValue] = useState(0)

  return (
    <View style={styles.container}>
		<View style={styles.topContainer}>
			<Text>
				Você está: {isConnected ? "conectado" : "desconectado"}
			</Text>

			{!isConnected && 
			<TouchableOpacity style={styles.button}>
				<Text>Se conecte agora</Text>
			</TouchableOpacity>
			}

			<Text>
				Valor atual: {actualValue}
			</Text>
		</View>


		<View style={styles.bottomContainer}>
			<Text>
			Histórico de valores recebidos:
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
		padding: 10
	},
	topContainer: {
		height: '50%',
	},
	bottomContainer: {
		height: '50%'
	},
	button: {
		height: 50, 
		width: 250,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: '#88f',
		borderRadius: 80
	}
})