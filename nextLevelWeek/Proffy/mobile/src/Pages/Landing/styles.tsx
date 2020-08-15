import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#8257E5',
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    }, 
    titleBold: {
        fontWeight: 'bold'
    },

    buttonsContainer: {
        flexDirection: 'row',
         justifyContent: 'space-between',
         marginTop: 40,
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        backgroundColor: '#9871F5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
    },
    totalConnections: {
        fontWeight: 'bold',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }
})

export default styles