import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native'

import BleManager from 'react-native-ble-manager';

const NAME_ID 				 = "ESP32-BLE"
const SERVICE_UUID           = "ab0828b1-198e-4351-b779-901fa0e0371e"
const CHARACTERISTIC_UUID_RX = "4ac8a682-9736-4e5d-932b-e9b31405049c"
const CHARACTERISTIC_UUID_TX = "0972EF8C-7613-4075-AD52-756F33D4DA91"

export default function App() {

	const exampleArray = [13, 2, 43, 53, 123, 12, 22]
	const [isConnected, setIsConnected] = useState(false)
	const [actualValue, setActualValue] = useState(0)

	useEffect(()=>{
		if (Platform.OS === 'android' && Platform.Version >= 23) {
			PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
				if (result) {
				  console.log("Permission is OK");
				} else {
				  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
					if (result) {
					  console.log("User accept");
					} else {
					  console.log("User refuse");
					}
				  });
				}
		  });
		}
	}, [])

	function handleConnection() {
		BleManager.connect(CHARACTERISTIC_UUID_TX)
		.then(() => {
			// Success code
			console.log("Connected");
		})
		.catch((error) => {
			// Failure code
			console.log(error);
		});
	}

	function start(){
		BleManager.start({ showAlert: false }).then((result) => {
			// Success code
			console.log("Module initialized", result);
		  });
	}

	function startScan(){
		BleManager.scan([], 3, true).then((results) => {
			console.log('Scanning...', results);
		});
	}



  return (
    <View style={styles.container}>
		<View style={styles.topContainer}>
			<Text>
				Você está: {isConnected ? "conectado" : "desconectado"}
			</Text>

			{!isConnected && 
			<TouchableOpacity 
				style={styles.button}
				onPress={handleConnection}
			>
				<Text>Se conecte agora</Text>
			</TouchableOpacity>
			}

			<TouchableOpacity 
				style={styles.button}
				onPress={start}
			>
				<Text>Start</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={styles.button}
				onPress={startScan}
			>
				<Text>Escaniar redes</Text>
			</TouchableOpacity>


			<Text>
				Valor atual: {actualValue}
			</Text>
		</View>


		<View style={styles.bottomContainer}>
			<Text>
			Histórico de valores recebidos:
			</Text>

			{
			exampleArray.map(item=>(
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