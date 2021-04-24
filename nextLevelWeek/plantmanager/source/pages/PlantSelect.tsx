import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, FlatList } from 'react-native'

import {Button} from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import api from '../services/api'
import { PlantCardPrimary } from '../components/PlantCardPrimary'

interface EnvironmentProps {
    key: string,
    title: string
}

interface PlantsProps {
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
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
    const [environmentSelected, setEnvironmentSelected] = useState('all')

    const [plants, setPlants] = useState<PlantsProps[]>([])
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])


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
        async function fetchPlants() {
            const {data} = await api.get('plants?_sort=name&order=asc')
            setPlants(data)
            setFilteredPlants(data)
        }
        
        fetchPlants()
    }, [])


    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment)

        if (environment === 'all') return setFilteredPlants(plants)

        const filtered = plants.filter(plant => plant.environments.includes(environment))

        setFilteredPlants(filtered)
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
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    renderItem={( {item} ) => (
                        <PlantCardPrimary data={item}/>
                    )}
                    contentContainerStyle={styles.plantsList}
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
