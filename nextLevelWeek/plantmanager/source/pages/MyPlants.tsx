import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Alert } from 'react-native'

import colors from '../styles/colors'
import waterDrop from '../assets/waterdrop.png'
import fonts from '../styles/fonts'

import { PlantProps, lodePlant, deletePlant } from '../libs/storage'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import { Header } from '../components/Header'
import { PlantCardSecondary } from '../components/PlantCardSecondary'
import { Load } from '../components/Load'

export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>()
    const [loading, setLoading] = useState(false)
    const [nextWatered, setNextWatered] = useState<string>()

    useEffect(() => {
        async function loadStorageData() {
            const storedPlants = await lodePlant()
            const nextTime = formatDistance(
                new Date(storedPlants[0].dateTimeNotification).getTime(), 
                new Date().getTime(),
                {locale: pt}
            )
            setNextWatered(`Não esqueça de regar a ${storedPlants[0].name} às ${nextTime} horas.`)
            setMyPlants(storedPlants)
            setLoading(false)
        }
        
        loadStorageData()
    }, [])

    function handleRemove(plant: PlantProps) {

        async function onRemove() {
            try {
                await deletePlant(plant.id)
                setMyPlants(oldState => oldState?.filter((item) => item.id !== plant.id))
            } catch (error) {
                Alert.alert('Não foi possível remover!', '\nTente novamente mais tarde!')
            }
        }

        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'cancel',
                onPress: onRemove
            },
        ])
    }

    if(loading) {
        return <Load />
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image source={waterDrop} style={styles.spotlightImage} />
                <Text style={styles.spotlightText}>
                    {nextWatered}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={( {item} ) => (
                        <PlantCardSecondary data={item} handleRemove={() => handleRemove(item)}/>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
    },
    spotlightImage: {
        width: 60,
        height: 60,
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
})
