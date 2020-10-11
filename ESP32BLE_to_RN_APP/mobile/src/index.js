import React, {useState, useEffect} from 'react'

// assets

// components
import ChartClassBased from './chartExemple'
import Chart from './chart'


// functions
import BleManager from 'react-native-ble-manager';


const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)


import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	NativeEventEmitter,
	NativeModules,
	Platform,
	PermissionsAndroid,
	ScrollView,
	FlatList,
	Dimensions,
	Button,
	SafeAreaView,
	Vibration
  } from 'react-native'


// constants 
const NAME_ID 				 = "ESP32-BLE"
const SERVICE_UUID           = "ab0828b1-198e-4351-b779-901fa0e0371e"
const CHARACTERISTIC_UUID_RX = "4ac8a682-9736-4e5d-932b-e9b31405049c"
const CHARACTERISTIC_UUID_TX = "0972EF8C-7613-4075-AD52-756F33D4DA91"

const window = Dimensions.get('window')
const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)


export default function App() {

	const [scanning, setScanning] = useState(false)
	const [lastReceivedNumber, setLastReceivedNumber] = useState(0)
	const [historyArray, setHistoryArray] = useState([])
	const [list, setList] = useState([])
	const [peripherals, setPeripherals] = useState([])


	useEffect(()=>{

		BleManager.start({showAlert: false})
	
		const handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral )
		const handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan )
		const handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral )
		const handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic )
	
	
		if (Platform.OS === 'android' && Platform.Version >= 23) {
			PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
				if (result) {
				  console.log("Permission is OK")
				} else {
				  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
					if (result) {
					  console.log("User accept")
					} else {
					  console.log("User refuse")
					}
				  })
				}
		  })
		}
	
	}, [])

	function handleDiscoverPeripheral(peripheral){

	}

	function handleStopScan(){

	}

	function handleDisconnectedPeripheral(data){

	}

	function handleUpdateValueForCharacteristic(data){

	}

	function handleConnection(){

	}

	function retrieveConnected() {

	}
	
	function startScan(){

	}
	
	function renderItem(){

	}

  return (
		<View style={styles.container}>
			<View style={{margin: 10}}>
				<Button 
					title={`Scan Bluetooth ${scanning ? 'on' : 'off'}`} 
					onPress={() => startScan() } 
				/>
			</View>

			<View style={{margin: 10}}>
				<Button title="Retrieve connected peripherals" onPress={() => retrieveConnected() } />
			</View>

			<ScrollView style={styles.scroll}>
				{(list.length == 0) &&
				<View style={{flex:1, margin: 20}}>
					<Text style={{textAlign: 'center'}}>No peripherals</Text>
				</View>
				}

				{list.map((item) => renderItem(item))}

				<Chart newData={lastReceivedNumber}/>

				<Text>Histórico dos valores recebidos</Text>
				{historyArray.map(item=>(
					<Text key={`${Math.random()}`}>{item}</Text>
				))}

			</ScrollView>

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

