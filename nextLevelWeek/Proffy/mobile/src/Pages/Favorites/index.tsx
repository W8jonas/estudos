import React, { useState } from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

// functions
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import {View, Image, ImageBackground,  Text, ScrollView} from 'react-native'


function Favorites() {
    const [favorites, setFavorites] = useState([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then((response)=>{
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                setFavorites(favoritedTeachers)
            }
        })
    }
    
    useFocusEffect(()=>{
        loadFavorites()
    })

    return (
        <View style={styles.container}>
            
            <PageHeader
                title="Meus proffys favoritos"
            />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
            >
                {favorites.map((teacher: Teacher)=> (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={true}
                    />
                ))}
            </ScrollView>

        </View>
    )
}

export default Favorites