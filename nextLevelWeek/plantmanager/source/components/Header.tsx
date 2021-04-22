import React from 'react'

import { View, Text, Image, StyleSheet} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/image.png'

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Ola,
                </Text>
                <Text style={styles.textName}>
                    Jonas
                </Text>
            </View>

            <Image source={userImg} style={styles.image}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        marginTop: getStatusBarHeight()
    },
    content: {

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    text: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    textName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
})
