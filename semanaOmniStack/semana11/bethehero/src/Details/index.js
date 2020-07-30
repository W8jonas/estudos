import React from 'react'
import {Image, Alert, View, Text, TouchableOpacity} from 'react-native'
import logoImg from '../assets/logo.png'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

export default function Incidents () {
    const navigation = useNavigation()
    
    function sendMail() {
        Alert.alert('Enviou o email')
    }

    function sendWhatsapp() {
        Alert.alert('Enviou o whats')
        
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={styles.headerText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Caso desricao 1</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>1234</Text>
        </View>

        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
            
            <Text style={styles.heroDescription}>Entre em contato:</Text>
            
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={()=>{}}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={()=>{}}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
