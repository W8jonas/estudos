import React,{useState, useEffect} from 'react'
import {Image, FlatList, ScrollView, View, Text, TouchableOpacity} from 'react-native'
import logoImg from '../assets/logo.png'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import api from '../services/api'

export default function Incidents () {
    const navigation = useNavigation()
    
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    function navigateToDetail(incidents) {
        navigation.navigate('Details',{incidents})
    }

    async function loadIncidents() {

        if(loading) return
        if (total > 0 && incidents.length === total) return

        setLoading(true)
        const res = await api.get('incidents')
        setIncidents([... incidents, ...res.data])
        setTotal(res.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }

    useEffect(()=>{
        loadIncidents()
    },[])

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
            </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

        <ScrollView style={styles.incidentList}>
            {
            incidents.map(({id, name, description, value, city, uf})=>(
                <View key={id.toString()} style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{name} de {city}/{uf}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{description}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    {/* <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-br', {
                        style: 'currency', currency: 'BRL'}).format(value)}
                    </Text> */}

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={()=>navigateToDetail(incidents)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            ))
            }
        </ScrollView>

    </View>
  )
}