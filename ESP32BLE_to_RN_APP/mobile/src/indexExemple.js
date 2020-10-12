import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
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
import BleManager from 'react-native-ble-manager'

// import ChartClassBased from './chartExemple'
// import Chart from './chart'

const window = Dimensions.get('window')

const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)


const NAME_ID 				 = "ESP32-BLE"
const SERVICE_UUID           = "ab0828b1-198e-4351-b779-901fa0e0371e"
const CHARACTERISTIC_UUID_RX = "4ac8a682-9736-4e5d-932b-e9b31405049c"
const CHARACTERISTIC_UUID_TX = "0972EF8C-7613-4075-AD52-756F33D4DA91"


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      scanning:false,
      peripherals: new Map(),
      historyArray: [],
      lastReceivedNumber: 0
    }

    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this)
    this.handleStopScan = this.handleStopScan.bind(this)
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this)
    this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this)
  }

  componentDidMount() {
		console.log('%c componentDidMount', 'color: orange')

    BleManager.start({showAlert: false})

    this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral )
    this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan )
    this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral )
    this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic )


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

  }

  componentWillUnmount() {
		console.log('%c componentWillUnmount', 'color: orange')
		
		this.handlerDiscover.remove()
    this.handlerStop.remove()
    this.handlerDisconnect.remove()
    this.handlerUpdate.remove()
  }

  handleDisconnectedPeripheral(data) {
		console.log('%c handleDisconnectedPeripheral', 'color: orange')

    let peripherals = this.state.peripherals
    let peripheral = peripherals.get(data.peripheral)
    if (peripheral) {
      peripheral.connected = false
      peripherals.set(peripheral.id, peripheral)
      this.setState({peripherals})
    }
    console.log('Disconnected from ' + data.peripheral)
  }

  handleUpdateValueForCharacteristic(data) {
		console.log('%c handleUpdateValueForCharacteristic', 'color: orange')
		
		function bufferToString(arr){
      return arr.map(function(i){return String.fromCharCode(i)}).join("")
    }
    const actualDataString = bufferToString(data.value)
    const actualDataNumber = Number(actualDataString)

    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, actualDataNumber)
    
    this.setState({lastReceivedNumber: actualDataNumber})
    this.setState({ historyArray: [actualDataNumber, ...this.state.historyArray] })
    this.setState({lastReceivedNumber: actualDataNumber})

    if (actualDataNumber > 3900){
      Vibration.vibrate(500, 500, 500, 500, 500)
    }
  }

  handleStopScan() {
		console.log('%c handleStopScan', 'color: orange')

    console.log('Scan is stopped')
    this.setState({ scanning: false })
  }

  startScan() {
		console.log('%c startScan', 'color: orange')

    if (!this.state.scanning) {
      //this.setState({peripherals: new Map()})
      BleManager.scan([], 3, true).then((results) => {
        console.log('Scanning...', results)
        this.setState({scanning:true})
      })
    }
  }

  retrieveConnected() {
		console.log('%c retrieveConnected', 'color: orange')

    BleManager.getConnectedPeripherals([]).then((results) => {
      if (results.length == 0) {
        console.log('No connected peripherals')
      }
      console.log(results)
      var peripherals = this.state.peripherals
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i]
        peripheral.connected = true
        peripherals.set(peripheral.id, peripheral)
        this.setState({ peripherals })
      }
    })
  }

  handleDiscoverPeripheral(peripheral) {
		console.log('%c handleDiscoverPeripheral', 'color: orange')
		
		var peripherals = this.state.peripherals
    console.log('Got ble peripheral', peripheral)
    if (!peripheral.name) {
      peripheral.name = 'NO NAME'
    }
    peripherals.set(peripheral.id, peripheral)
    this.setState({ peripherals })
  }

  test(peripheral) {
		console.log('%c test', 'color: orange')
		
		if (peripheral){
      if (peripheral.connected){
        BleManager.disconnect(peripheral.id)
      }else{
        BleManager.connect(peripheral.id).then(() => {
          let peripherals = this.state.peripherals
          let p = peripherals.get(peripheral.id)
          if (p) {
            p.connected = true
            peripherals.set(peripheral.id, p)
            this.setState({peripherals})
          }
          console.log('Connected to ' + peripheral.id)


          setTimeout(() => {

            /* Test read current RSSI value
            BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
              console.log('Retrieved peripheral services', peripheralData)
              BleManager.readRSSI(peripheral.id).then((rssi) => {
                console.log('Retrieved actual RSSI value', rssi)
              })
            })*/

            // Test using bleno's pizza example
            // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
            BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
              console.log(peripheralInfo)
              var service = SERVICE_UUID
              var bakeCharacteristic = CHARACTERISTIC_UUID_TX
              var crustCharacteristic = CHARACTERISTIC_UUID_RX

              setTimeout(() => {
                BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                  console.log('Started notification on ' + peripheral.id)
                }).catch((error) => {
                  console.log('Notification error', error)
                })
              }, 200)
            })

		  		}, 900)
		  
        }).catch((error) => {
          console.log('Connection error', error)
        })
      }
    }
  }

  renderItem(item) {
    if(!item) {
      return
    }

    const color = item.connected ? 'green' : '#fff'
    return (
      <TouchableHighlight key={item.id} onPress={() => this.test(item) }>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Text style={{fontSize: 12, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
          <Text style={{fontSize: 10, textAlign: 'center', color: '#333333', padding: 2}}>RSSI: {item.rssi}</Text>
          <Text style={{fontSize: 8, textAlign: 'center', color: '#333333', padding: 2, paddingBottom: 20}}>{item.id}</Text>
        </View>
      </TouchableHighlight>
    )
  }


  render() {
    const list = Array.from(this.state.peripherals.values())
    const btnScanTitle = 'Scan Bluetooth (' + (this.state.scanning ? 'on' : 'off') + ')'

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={{margin: 10}}>
            <Button title={btnScanTitle} onPress={() => this.startScan() } />
          </View>

          <View style={{margin: 10}}>
            <Button title="Retrieve connected peripherals" onPress={() => this.retrieveConnected() } />
          </View>


          <ScrollView style={styles.scroll}>
            {(list.length == 0) &&
              <View style={{flex:1, margin: 20}}>
                <Text style={{textAlign: 'center'}}>No peripherals</Text>
              </View>
            }

            {list.map((item) => this.renderItem(item))}

            {/* <Chart newData={this.state.lastReceivedNumber}/> */}

            <Text>Histórico dos valores recebidos</Text>
            {this.state.historyArray.map(item=>(
                <Text key={`${Math.random()}`}>{item}</Text>

            ))}

          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: window.width,
    height: window.height
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  row: {
    margin: 10
  },
})