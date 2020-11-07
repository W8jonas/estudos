import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

import {Feather} from '@expo/vector-icons'

import MapMarker from '../../images/map-marker.png'
import { useNavigation } from '@react-navigation/native'

export default function App() {

  const navigation = useNavigation()

  function handleNavigateToOrphanageDetails() {
    navigation.navigate("OrphanageDetails")
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -20.6699959,
          longitude: -43.7998442,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        
        <Marker 
          icon={MapMarker}
          coordinate={{
            latitude: -20.6699959,
            longitude: -43.7998442,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>

      </MapView>

      <View style={styles.footerContainer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
            <Feather name="plus" size={20} color="#fff"/>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  footerContainer: {
    height: 56,
    position: 'absolute',
    left: 24, 
    right: 24,
    bottom: 32,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
    paddingLeft: 24,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  createOrphanageButton: {
    width: 56,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,
    backgroundColor: '#15c3d6',
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  calloutText: {
    fontSize: 14,
    color: '#0089a5',
    fontFamily: 'Nunito_700Bold'
  }
})
