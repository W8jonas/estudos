import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

import {Button} from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface Params {
    title: string,
    caption: string,
    buttonTitle: string,
    icon: 'smile' | 'hug',
    nextScreen: string,
}

const emojis = {
    smile: '😀',
    hug: '🤗',
}


export function Confirmation() {
    const navigation = useNavigation()
    const routes = useRoute()

    const {
        title,
        caption,
        buttonTitle,
        icon,
        nextScreen,
    } = routes.params as Params

    function onNavigation() {
        navigation.navigate(nextScreen)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>
                
                <Text style={styles.title}>
                    {title}
                </Text>
                
                <Text style={styles.text}>
                    {caption}
                </Text>

                <View style={styles.footer}>
                    <Button title={buttonTitle} onPress={onNavigation}/>
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
