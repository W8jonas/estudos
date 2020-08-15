import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        fontWeight: 'bold',
        maxWidth: 180,
    }, 
    description: {
        fontSize: 16,
        lineHeight: 26,
        marginTop: 24,
        color: '#d4c2ff',
        fontWeight: 'bold',
        maxWidth: 240,
    },
    button: {
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04d361',
        borderRadius: 8,
        marginVertical: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default styles