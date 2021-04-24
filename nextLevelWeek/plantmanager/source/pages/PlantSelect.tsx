import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, FlatList } from 'react-native'

import {Button} from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'

export function PlantSelect() {
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
                data={[1, 2, 3, 4, 5, 6, 7 ]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={( {item} ) => (
                    <EnvironmentButton title="asas" active/>
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
