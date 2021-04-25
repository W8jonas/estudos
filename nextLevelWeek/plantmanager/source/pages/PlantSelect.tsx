import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import { Load } from '../components/Load'

import api from '../services/api'
import { useNavigation } from '@react-navigation/native'

interface EnvironmentProps {
    key: string,
    title: string
}

interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
      times: number,
      repeat_every: string
    }
}

export function PlantSelect() {
    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
    const [environmentSelected, setEnvironmentSelected] = useState('all')

    const [plants, setPlants] = useState<PlantProps[]>([])
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)


    async function fetchPlants() {
        const {data} = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=4`)

        if (!data) return setLoading(true)

        if (page > 1) {
            setPlants(oldValues => [...oldValues, ...data])
            setFilteredPlants(oldValues => [...oldValues, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)
        }

        setLoading(false)
        setLoadingMore(false)
    }

    useEffect(()=>{
        async function fetchEnvironment() {
            const {data} = await api.get('plants_environments?_sort=title&order=asc')
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos'
                }, 
                ...data
            ])
        }
        
        fetchEnvironment()
    }, [])

    useEffect(()=>{
        fetchPlants()
    }, [])

    function handleFetchMore(distance: number) {
        if (distance < 1) {
            return
        }

        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    }

    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment)

        if (environment === 'all') return setFilteredPlants(plants)

        const filtered = plants.filter(plant => plant.environments.includes(environment))

        setFilteredPlants(filtered)
    }

    function handlePlantSelect(plant: PlantProps) {
        navigation.navigate('PlantSave')
    }


    if(loading) {
        return <Load />
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    Em qual hambiente 
                </Text>
                
                <Text style={styles.caption}>
                    você quer colocar sua planta?
                </Text>
            </View>

            <View>
                <FlatList
                    data={environments}
                    keyExtractor={(item) => String(item.key)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={( {item} ) => (
                        <EnvironmentButton
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    contentContainerStyle={styles.EnvironmentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.plantsList}
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                    renderItem={( {item} ) => (
                        <PlantCardPrimary data={item} onPress={handlePlantSelect}/>
                    )}
                    ListFooterComponent={
                        loadingMore 
                        ? <ActivityIndicator color={colors.green} />
                        : null
                    }
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
    },
    EnvironmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 16,
        marginVertical: 32,
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
    },
    caption: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    plantsList: {
        
    }
})
