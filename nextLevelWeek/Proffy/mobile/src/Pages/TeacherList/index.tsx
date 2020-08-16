import React, { useState } from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader/index'
import TeacherItem from '../../components/TeacherItem'
import Icon from 'react-native-vector-icons/Feather'

// functions


import {View, Text, ScrollView} from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
// import { ScrollView } from 'react-native-gesture-handler'

 
function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

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
                        />
                        
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                                
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                                
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
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
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>

        </View>
    )
}

export default TeacherList