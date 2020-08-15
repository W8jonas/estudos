import React from 'react'

// assets
import styles from './styles'
import LandingImg from '../../assets/images/landing.png'
import StudyIcon from '../../assets/images/icons/study.png'
import GiveClassesIcon from '../../assets/images/icons/give-classes.png'
import HeartIcon from '../../assets/images/icons/heart.png'

// components
import {RectButton} from 'react-native-gesture-handler'

// functions
import {useNavigation} from '@react-navigation/native'


import {View, Image, Text, TouchableOpacity} from 'react-native'


function Landing() {
    const navigation = useNavigation()

    function handleNavigateToGiveClasses(){
        navigation.navigate('GiveClasses')
    }

    function handleNavigateToStudyTabs(){
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.banner}
                source={LandingImg}
            />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyTabs}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={StudyIcon}/>

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClasses} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={GiveClassesIcon}/>

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 284 conexões já realizadas {' '}
                <Image source={HeartIcon} />
            </Text>
        </View>
    )
}

export default Landing