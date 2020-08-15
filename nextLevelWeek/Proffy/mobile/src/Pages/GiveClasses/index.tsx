import React from 'react'

// assets
import styles from './styles'
import GiveClassesBackgroundImg from '../../assets/images/give-classes-background.png'

// components
import { RectButton } from 'react-native-gesture-handler'

// functions
import { useNavigation } from '@react-navigation/native'


import {View, Image, ImageBackground,  Text, TouchableOpacity} from 'react-native'


function GiveClasses() {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain'
                style={styles.content}
                source={GiveClassesBackgroundImg}
            >
            
                <Text style={styles.title}>
                    Quer ser um Proff?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton
                onPress={handleNavigateBack}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Tudo bem!
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses