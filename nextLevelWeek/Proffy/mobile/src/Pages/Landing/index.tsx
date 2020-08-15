import React from 'react'

// assets
import styles from './styles'
import LandingImg from '../../assets/images/landing.png'
import StudyIcon from '../../assets/images/icons/study.png'
import GiveClassesIcon from '../../assets/images/icons/give-classes.png'
import HeartIcon from '../../assets/images/icons/heart.png'


// components


// functions

import {View, Image, Text, TouchableOpacity} from 'react-native'


function Landing() {
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
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={StudyIcon}/>

                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={GiveClassesIcon}/>

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de 284 conexões já realizadas {' '}
                <Image source={HeartIcon} />
            </Text>
        </View>
    )
}

export default Landing