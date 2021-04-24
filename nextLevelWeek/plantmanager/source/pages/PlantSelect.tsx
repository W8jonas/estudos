import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, FlatList } from 'react-native'

import {Button} from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import api from '../services/api'

interface EnvironmentProps {
    key: number,
    title: string
}

export function PlantSelect() {
    const [environment, setEnvironment] = useState<EnvironmentProps[]>([])


    useEffect(()=>{
        async function fetchEnvironment() {
            const {data} = await api.get('plants_environments')
            setEnvironment([
                {
                    key: 'all',
                    title: 'Todos'
                }, 
                ...data
            ])
        }
        
        fetchEnvironment()
    }, [])


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    Em qual hambiente 
                </Text>
                
                <Text style={styles.caption}>
                    você quer colocar sua planta?
                </Text>
            </View>

            <View>
                <FlatList
                data={environment}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={( {item} ) => (
                    <EnvironmentButton title={item.title}/>
                )}
                contentContainerStyle={styles.EnvironmentList}
                />
            </View>

            <View style={styles.wrapper}>
                <View style={styles.footer}>
                    <Button title="Começar"/>
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
    },
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    EnvironmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
    },
    caption: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})
