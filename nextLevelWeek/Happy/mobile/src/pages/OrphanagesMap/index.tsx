import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

import {Feather} from '@expo/vector-icons'

import MapMarker from '../../images/map-marker.png'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import api from '../../services/api'

interface Orphanage {
  id: number,
  name: string, 
  latitude: number,
  longitude: number,
}

export default function App() {

  const navigation = useNavigation()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  function handleNavigateToOrphanageDetails(id : number) {
    navigation.navigate("OrphanageDetails", {id})
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate("SelectMapPosition")
  }

  useFocusEffect(()=>{
    api.get('orphanages').then((response) => setOrphanages(response.data))
  })

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
        
        {orphanages.map(orphanage=>
          <Marker
            key={orphanage.id}
            icon={MapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
          >
            <Callout tooltip={true} onPress={()=>handleNavigateToOrphanageDetails(orphanage.id)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker> 
        )}

      </MapView>

      <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
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
