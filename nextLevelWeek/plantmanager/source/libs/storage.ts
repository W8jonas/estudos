import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns/esm'
import * as Notifications from 'expo-notifications';

export interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
        times: number,
        repeat_every: string
    },
    dateTimeNotification: Date,
    hour: string,
}

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps,
        notificationId: string
    }
}


export async function savePlant(plant: PlantProps) : Promise<void> {
    try {

        const nexTime = new Date(plant.dateTimeNotification)
        const now = new Date()

        const { times, repeat_every } = plant.frequency
        if (repeat_every === 'week') {
            const interval = Math.trunc(7 / times)
            nexTime.setDate(now.getDate() + interval)
        } else {
            nexTime.setDate(now.getDate() + 1)
        }

        const seconds = Math.abs(
            Math.ceil((now.getTime() - nexTime.getTime()) / 1000)
        )

        const notificationId = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Eiii',
                body: `Èstá na hora de cuidar da sua ${plant.name}`,
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                data: {
                    plant
                },
            },
            trigger: {
                seconds: 60,
                // seconds: seconds < 60 ? 60 : seconds,
                repeats: true
            }
        })

        const data = await AsyncStorage.getItem('@plantmanager:plants')
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

        const newPlant = {
            [plant.id]: {
                data: plant,
                notificationId
            }
        }

        await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({...newPlant, ...oldPlants}))

    } catch (error) {
        throw new Error(error)
    }
}


export async function lodePlant() : Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants')
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

        const plantsSorted = Object.keys(plants)
        .map((plant) => {
            return {
                ...plants[plant].data,
                hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
            }
        })
        .sort((a, b) => (
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 -
                new Date(b.dateTimeNotification).getTime() / 1000 
            )
        ))

        return plantsSorted
    } catch (error) {
        throw new Error(error)
    }
}


export async function deletePlant(id: string) : Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants')
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

        await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId)

        delete plants[id]

        await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants))

    } catch (error) {
        throw new Error(error)
    }

}

