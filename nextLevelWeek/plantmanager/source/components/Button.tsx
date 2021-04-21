import React from 'react'

import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions, View, TextInput } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Button() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <Text style={styles.text}>
            Confirmar
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fonts.heading
    },
})
