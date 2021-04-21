import React, { useState } from 'react'

import { Text, SafeAreaView,StyleSheet, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false)
    const [name, setName] = useState<string>('')

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.wrapper}>
                    <View style={styles.form}>

                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                😃
                            </Text>
                            
                            <Text style={styles.title}>
                                Como podemos {'\n'} chamar você?
                            </Text>

                        </View>

                        <TextInput 
                            style={[styles.input, (isFocused || !!name) && {borderColor: colors.green}]}
                            placeholder="Digite seu nome"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChangeText={setName}
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
    header: {
        alignItems: 'center',
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
