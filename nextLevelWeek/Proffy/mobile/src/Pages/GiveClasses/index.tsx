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


function GiveClasses() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.banner}
                source={LandingImg}
            />
            
        </View>
    )
}

export default GiveClasses