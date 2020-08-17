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

import {View, Image, Text, Linking} from 'react-native'

export interface Teacher {
    id: string;
    bio:string;
    subject:string;
    cost: number;
    name:string;
    avatar:string;
    whatsapp:string;
}


interface TeacherItemProps {
    teacher: Teacher
}
  
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) =>{
    const navigation = useNavigation()

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: teacher.avatar}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> {teacher.name} </Text>
                    <Text style={styles.subject}> {teacher.subject} </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora:
                    <Text style={styles.priceValue}>   {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoritIcon} />
                    </RectButton>

                    <RectButton 
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
                
            </View>
        </View>
    )
}

export default TeacherItem