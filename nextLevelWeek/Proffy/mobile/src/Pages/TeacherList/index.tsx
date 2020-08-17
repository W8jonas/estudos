import React, { useState, useEffect } from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader/index'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Icon from 'react-native-vector-icons/Feather'

// functions
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'


import {View, Text, ScrollView} from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
// import { ScrollView } from 'react-native-gesture-handler'


function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(true)
    const [favorites, setFavorites] = useState<number[]>([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])


    useFocusEffect(()=>{
        loadFavorites()
    })

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then((response)=>{
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id) 
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    async function handleFiltersSubmit(){
        loadFavorites()
        
        const response = await api.get('classes', {
            params: {
                subject, 
                week_day,
                time
            }
        })
        setTeachers(response.data)
        setIsFiltersVisible(false)
    }

    function handleSetFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleSetFiltersVisible}>
                        <Icon
                            name="filter"
                            size={20}
                            color="#fff"
                        />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matérias</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />
                        
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1bccc"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton 
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>

                    </View>
                )}

            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
            >
                {teachers.map((teacher: Teacher)=> (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}

            </ScrollView>

        </View>
    )
}

export default TeacherList