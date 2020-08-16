import React from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

// functions


import {View, Image, ImageBackground,  Text, ScrollView} from 'react-native'


function Favorites() {

    return (
        <View style={styles.container}>
            
            <PageHeader
                title="Meus proffys favoritos"
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

export default Favorites