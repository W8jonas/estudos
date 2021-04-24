import React from 'react'

import { View, Text, StyleSheet} from 'react-native'

import LoadAnimation from '../assets/load.json'

import LottieView from 'lottie-react-native'


export function Load() {
    return (
        <View style={styles.container}>
            <LottieView source={LoadAnimation} autoPlay loop style={styles.animation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    animation: {
        width: 70,
        height: 70,
        backgroundColor: 'transparent'
    },
})
