import React from 'react'

// assets
import styles from './styles'
import backIcon from  '../../assets/images/icons/back.png'
import logoImg from  '../../assets/images/logo.png'

// components
import { BorderlessButton } from 'react-native-gesture-handler'

// functions
import { useNavigation } from '@react-navigation/native'


import {View, Image, ImageBackground,  Text, TouchableOpacity} from 'react-native'

interface PageHeaderProps {
    title: string
}
  
const PageHeader: React.FC<PageHeaderProps> = ({title}) =>{
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleNavigateBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain"/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>

        </View>
    )
}

export default PageHeader