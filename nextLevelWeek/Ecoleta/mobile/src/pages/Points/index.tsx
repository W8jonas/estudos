import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity, Text, ScrollView, Image, PermissionsAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from "@react-navigation/native"
import MapboxGL from "@react-native-mapbox-gl/maps"
import { SvgUri } from "react-native-svg"
import styles from "./styles"
import api from '../../services/api'
// import Geolocation from '@react-native-community/geolocation';

const LINK = "http://192.168.2.2:3333/uploads/oleo.svg"

MapboxGL.setAccessToken("pk.eyJ1Ijoidzhqb25hcyIsImEiOiJja2JkeTh1aGQwZ2FuMzFtejQ4YTllaWpyIn0.a-hfivoMwtrR8m8m09HeMg");
MapboxGL.setConnected(true);


interface Item {
  id: number,
  title: string,
  image_url: string
}
interface Point {
  id: number,
  name: string,
  image: string,
  latitude: number,
  longitude: number,
}
interface Params {
  uf: string
  city: string
}

const getPointsArrayFakeData = [
	{
	  "id": 1,
	  "image": "https://images.unsplash.com/photo-1591567967940-93c1efc6765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
	  "name": "Mercadinho Ranieri",
	  "email": "Ranieri@gmail.com",
	  "whatsapp": "31434992243",
	  "city": "Lafaiete",
	  "uf": "mg",
	  "latitude": -43.7986785,
	  "longitude": -20.6688576
	},
	{
	  "id": 2,
	  "image": "https://images.unsplash.com/photo-1591567967940-93c1efc6765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
	  "name": "Clube Dom Pedro2",
	  "email": "DomPedro2@gmail.com",
	  "whatsapp": "31434992243",
	  "city": "Lafaiete",
	  "uf": "mg",
	  "latitude": -43.7985712,
	  "longitude": -20.6675476
	},
	{
	  "id": 3,
	  "image": "https://images.unsplash.com/photo-1591567967940-93c1efc6765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
	  "name": "Mercadão das Madeiras",
	  "email": "mercadao@madeiras.com",
	  "whatsapp": "315623474",
	  "city": "Lafaiete",
	  "uf": "mg",
	  "latitude": -43.8018231,
	  "longitude": -20.6698131
	}
]

const Points = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [items, setItems] = useState<Item[]>([])
  const [points, setPoints] = useState<Point[]>([])

  const routeParams = route.params as Params

  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [initialPosition, setInitialPosition] = useState<number[]>([1, 0])

  useEffect(()=>{
    api.get('items').then((response)=>{
		console.log('response get items: ', response.data);
		setItems(response.data)
    })
  }, [])

  useEffect(()=>{
    api.get('points',{
      params: {
        city: routeParams.city,
        uf: routeParams.uf,
        items: selectedItems
      }
    }).then((response)=>{
      console.log('response get points: ', response.data);
      
      setPoints(response.data)
    })
  }, [selectedItems])


  useEffect(()=>{
	async function permissionForLocation() {
		return await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
	}

	if (!permissionForLocation()) {
		requestLocationPermission()
	}
  }, [])

  const requestLocationPermission = async () => {
	try {
	  const granted = await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		{
		  title: "Permissão para acessar sua localização",
		  message:
			"Precisamos acessar sua localização! " +
			"Fique tranquilo, os sequestradores não irão demorar à chegar",
		  buttonNeutral: "Pergunte-me depois",
		  buttonNegative: "Cancelar",
		  buttonPositive: "OK"
		}
	  )
	} catch (err) {
	  console.warn(err)
	}
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item)=> item === id)

    if (alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item => item !== id)
        setSelectedItems(filteredItems)
    }else {
        setSelectedItems([...selectedItems, id])
    }
  }

  function handleNavigateBack() {
    navigation.goBack()
  }
  
  function handleNavigateToDetail(id: number) {
    navigation.navigate('Detail', {point_id: id})
  }

  useEffect(()=>{
    MapboxGL.setTelemetryEnabled(false);
  },[])


  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={30} color="#34cb75" />
        </TouchableOpacity>

        <Text style={styles.title}>😍Bem vindo.</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

        <View style={styles.mapContainer}>

          {initialPosition[0] !== 0 &&
            <MapboxGL.MapView 
            style={styles.map}
            styleURL={MapboxGL.StyleURL.Dark}
          >
            <MapboxGL.Camera 
              centerCoordinate={[-43.7971312, -20.6719389]}
			  zoomLevel={80}
			  followUserLocation={true}
            />

            <MapboxGL.UserLocation
				visible={true}
				showsUserHeadingIndicator={true}
			/>

            {getPointsArrayFakeData.map((point)=>(
              <MapboxGL.MarkerView
                key={`${point.id}`}
				id={`${point.id}`}
                coordinate={[point.latitude, point.longitude]}
              >
				
                <TouchableOpacity
					style={styles.mapMarkerContainer}
					onPress={()=>handleNavigateToDetail(point.id)}
				>
                  <Image style={styles.mapMarkerImage} source={{uri: point.image}} />
                  <Text style={styles.mapMarkerTitle}>
                    {point.name}
                  </Text>
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            ))}

          </MapboxGL.MapView>}

        </View>
      </View>
      
      <View style={styles.itemsContainer}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        >
          {items.map((item)=> (
            <TouchableOpacity
              activeOpacity={0.5}
              key={`${item.id}`} 
              style={[
                styles.item, 
                selectedItems.includes(item.id) ? styles.selectedItem : {}
              ]} 
              onPress={()=>{handleSelectItem(item.id)}}
            >
              <SvgUri width={42} height={42} uri={item.image_url}/>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default Points;