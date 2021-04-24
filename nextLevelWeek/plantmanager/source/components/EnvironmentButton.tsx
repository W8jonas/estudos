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
        <RectButton style={styles.container} {...props}>
        <Text style={styles.text}>
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
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
})
