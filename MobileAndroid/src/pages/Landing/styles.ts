import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,
       

    },
    banner:{
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontWeight: 'bold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
       
    },
    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecondary:{
        backgroundColor: '#04d361'
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
    }


})

export default styles