import React from 'react'

import { Text, View, Image, TouchableOpacity } from 'react-native'

import wateringImg from '../assets/watering.png'

export function Welcome() {
    return (
        <View>
            <Text>
                Welcome
            </Text>

            <Image source={wateringImg}/>

            <TouchableOpacity>
                <Text>
                    >
                </Text>
            </TouchableOpacity>
        </View>
    )
}
