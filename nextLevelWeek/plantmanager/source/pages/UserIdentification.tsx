import React from 'react'

import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions, View, TextInput } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Feather } from '@expo/vector-icons'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        😃
                    </Text>
                    
                    <Text style={styles.title}>
                        Como podemos {'\n'} chamar você?
                    </Text>

                    <TextInput 
                        style={styles.input}
                    />

                    <View style={styles.footer}>
                    <Button />
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapper: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    emoji: {
        fontSize: 44,
        color: colors.heading,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '100%',
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
})
