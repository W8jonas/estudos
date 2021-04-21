import React from 'react'

import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Feather } from '@expo/vector-icons'
import fonts from '../styles/fonts'

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} suas plantas de {'\n'} forma fácil
                </Text>

                <Image source={wateringImg} style={styles.imageContent}/>

                <Text style={styles.caption}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
                    <Feather size={20} name="chevron-right" style={styles.buttonContent} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    caption: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text,
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
