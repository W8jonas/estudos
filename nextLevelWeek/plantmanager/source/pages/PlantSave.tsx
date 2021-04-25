import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, ScrollView, Image } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import {SvgFromUri} from 'react-native-svg'

import waterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { useRoute } from '@react-navigation/native'

interface Params {
    plant: {
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
}

export function PlantSave() {

    const route = useRoute()

    const { plant } = route.params as Params 


    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri={plant.photo} width={150} height={150} />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterDrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.plantName}>
                    Escolha o melhor horário para ser lembrado
                </Text>

                <Button title="Cadastrar planta" onPress={()=>{}}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    controller: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20,
        backgroundColor: colors.white
    },
    plantName: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
    },
    plantAbout: {
        fontSize: 17,
        marginTop: 10,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60,
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        textAlign: 'justify',
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    }
})
