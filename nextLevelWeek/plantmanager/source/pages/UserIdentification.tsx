import React from 'react'

import { Text, SafeAreaView,StyleSheet, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
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
                            placeholder="Digite seu nome"
                        />

                        <View style={styles.footer}>
                        <Button />
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>
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
