import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'

import {Button} from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.emoji}>
                    😃
                </Text>
                
                <Text style={styles.title}>
                    Estamos prontos!
                </Text>
                
                <Text style={styles.text}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title="Começar"/>
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    emoji: {
        fontSize: 78,
        color: colors.heading,
    },
    title: {
        fontSize: 22,
        lineHeight: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})
