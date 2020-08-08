import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,
       

    },
    content: {
        flex:1,
        justifyContent:"center",
        resizeMode: "contain",
    },
    title: {
    fontSize: 32,
    color: '#fff',
    lineHeight:37,
    maxWidth:180,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize:16,
        lineHeight: 26,
        maxWidth:240
    },
    okButton:{
        marginVertical: 40,
        height:58,
        backgroundColor: '#04d361',
        alignItems: 'center',
        justifyContent: 'center',
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
    }
})

export default styles