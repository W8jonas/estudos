import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, ScrollView, Image } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import {SvgFromUri} from 'react-native-svg'

import waterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export function PlantSave() {
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri="" width={150} height={150} />

                <Text style={styles.plantName}>
                    Nome da planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore magnam perspiciatis! 
                    Nemo, dolore. Iusto, hic quis quo beatae voluptas quos adipisci velit
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterDrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore magnam perspiciatis! 
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
