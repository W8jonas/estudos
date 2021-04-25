import React, { useState } from 'react'
import { Text, Platform, View, StyleSheet, Image, FlatList } from 'react-native'

import colors from '../styles/colors'
import waterDrop from '../assets/waterdrop.png'

import { Header } from '../components/Header'
import { PlantProps } from '../libs/storage'

export function MyPlants() {
    const [] = useState<PlantProps[]>()
    const [loading, setLoading] = useState(false)
    const [nextWatered, setNextWatered] = useState<string>()

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image source={waterDrop} style={styles.spotlightImage} />
                <Text style={styles.spotlightText}>
                    asdasd
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList />
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
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {

    },
    spotlightText: {

    },
    spotlightImage: {

    },
    plants: {

    },
    plantsTitle: {

    }
})
