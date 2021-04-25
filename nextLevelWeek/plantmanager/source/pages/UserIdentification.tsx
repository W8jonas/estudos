import React, { useState } from 'react'

import { Text, SafeAreaView,StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false)
    const [name, setName] = useState<string>('')

    const navigation = useNavigation()

    async function onNavigation() {
        if(!name) return Alert.alert('Eii, espera!', '\nMe diga como chamar você 😥')
        
        try {
            await AsyncStorage.setItem('@plantmanager:user', name)
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                caption: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            })
        } catch (error) {
            Alert.alert('Eii, espera!', 'Tivemos um problema ao salvar seu nome, 😥\ntente novamente!')
        }

    }

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
                            <Button title="Confirmar" onPress={onNavigation} />
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
