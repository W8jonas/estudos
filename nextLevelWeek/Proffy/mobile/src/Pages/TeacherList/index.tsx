import React from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader/index'
import TeacherItem from '../../components/TeacherItem'

// functions


import {View, Image, ImageBackground,  Text, TouchableOpacity, ScrollView} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'

 
function TeacherList() {

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
            />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
            >
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>

        </View>
    )
}

export default TeacherList