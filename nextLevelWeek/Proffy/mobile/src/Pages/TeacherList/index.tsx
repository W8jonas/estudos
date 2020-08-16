import React from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader/index'

// functions


import {View, Image, ImageBackground,  Text, TouchableOpacity} from 'react-native'

 
function TeacherList() {

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
            />
        </View>
    )
}

export default TeacherList