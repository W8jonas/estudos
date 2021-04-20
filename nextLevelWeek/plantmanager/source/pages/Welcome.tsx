import React from 'react'

import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Feather } from '@expo/vector-icons'

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'} suas plantas {'\n'} de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.imageContent}/>

            <Text style={styles.caption}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
                <Feather size={20} name="chevron-right" style={styles.buttonContent} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    caption: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonContent: {
        color: colors.white,
        fontSize: 32,
    },
    imageContent: {
        height: Dimensions.get('window').height * 0.4,
        resizeMode: 'contain'
    }
})
