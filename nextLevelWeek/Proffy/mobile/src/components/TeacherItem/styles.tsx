import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: '#e6e6f0',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16
    }, 
    name: {
        color: '#32264d',
        fontSize: 20,
    }, 
    subject: {
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    }, 
    bio: {
        marginHorizontal: 24,
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180'
    },
    

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },
    price: {
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue: {
        color: '#8257e5',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    favorited: {
        backgroundColor: '#e33d3d',
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 16
    },
})

export default styles