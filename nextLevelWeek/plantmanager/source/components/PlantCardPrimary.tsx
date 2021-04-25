import React from 'react'

import { Text, StyleSheet} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {SvgFromUri} from 'react-native-svg'

interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string
    }
}

export function PlantCardPrimary({data, ...props}: PlantProps) {
    return (
        <RectButton 
            style={styles.container} 
            {...props}
        >
            <SvgFromUri uri={data.photo} width={'150%'}/>
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        alignItems: 'center',
        backgroundColor: colors.shape,
        borderRadius: 20,
        margin: 10,
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16,
    },
})
