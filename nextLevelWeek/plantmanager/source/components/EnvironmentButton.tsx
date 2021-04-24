import React from 'react'

import { Text, TouchableOpacity, StyleSheet} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface EnvironmentButtonProps extends RectButtonProps {
    title: string,
    active?: boolean
}

export function EnvironmentButton({title, active = false, ...props}: EnvironmentButtonProps) {
    return (
        <RectButton 
            style={[styles.container, active && styles.containerActive]} 
            {...props}
        >
        <Text style={[styles.text, active && styles.textActive]}>
            {title}
        </Text>
    </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 76,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: colors.shape,
        marginRight: 5
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.text
    },
})
