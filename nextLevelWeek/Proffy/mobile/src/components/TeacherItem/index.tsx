import React from 'react'

// assets
import styles from './styles'
import heartOutlineIcon from  '../../assets/images/icons/heart-outline.png'
import unfavoritIcon from  '../../assets/images/icons/unfavorite.png'
import whatsappIcon from  '../../assets/images/icons/whatsapp.png'

// components
import { RectButton } from 'react-native-gesture-handler'

// functions
import { useNavigation } from '@react-navigation/native'


import {View, Image, ImageBackground,  Text, TouchableOpacity} from 'react-native'

interface TeacherItem {
    title?: string
}
  
const TeacherItem: React.FC<TeacherItem> = ({title}) =>{
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://github.com/w8jonas.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Jonas </Text>
                    <Text style={styles.subject}> Geografia </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi natus, 
                {'\n\n'}
                dolor sunt commodi iste nihil iure illo inventore aspernatur, adipisci laborum eos.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora:
                    <Text style={styles.priceValue}>   R$20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoritIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
                
            </View>
        </View>
    )
}

export default TeacherItem