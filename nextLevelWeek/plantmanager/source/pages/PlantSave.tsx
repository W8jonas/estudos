import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, ScrollView, Image } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import {SvgFromUri} from 'react-native-svg'

import waterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'

export function PlantSave() {
    return (
        <>
            <View style={styles.container}>
                <SvgFromUri uri="" width={150} height={150} />

                <Text style={styles.plantName}>
                    Nome da planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore magnam perspiciatis! 
                    Nemo, dolore. Iusto, hic quis quo beatae voluptas quos adipisci velit
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterDrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore magnam perspiciatis! 
                        Nemo, dolore. Iusto, hic quis quo beatae voluptas quos adipisci velit
                    </Text>
                </View>

                <Text style={styles.plantName}>
                    Escolha o melhor horário para ser lembrado
                </Text>

                <Button title="Cadastrar planta" onPress={()=>{}}/>
            </View>
        </>
    )
}

