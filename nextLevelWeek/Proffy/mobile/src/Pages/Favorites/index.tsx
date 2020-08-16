import React from 'react'

// assets
import styles from './styles'

// components
import PageHeader from '../../components/PageHeader'

// functions


import {View, Image, ImageBackground,  Text, TouchableOpacity} from 'react-native'


function Favorites() {

    return (
        <View style={styles.container}>
            
            <PageHeader
                title="Meus proffys favoritos"
            />

        </View>
    )
}

export default Favorites