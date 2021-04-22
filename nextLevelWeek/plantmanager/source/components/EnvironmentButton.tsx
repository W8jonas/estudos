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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fonts.heading
    },
})
