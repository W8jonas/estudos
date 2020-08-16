import React, { ReactNode } from 'react'

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
    title: string,
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children}) =>{
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

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default PageHeader