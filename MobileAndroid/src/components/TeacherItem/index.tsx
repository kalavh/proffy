import React from 'react'
import {View,Image,Text} from 'react-native'
import styles from './styles'

function TeactherItem() {
    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image style={styles.avatar}
                soruce={{uri: 'https://github.com/kalavh.png'}} 
                />
                <View style={styles.proFileInfo}>
                    <Text style={styles.name}>name </Text>
                    <Text style={styles.subject}>subject </Text>
                </View>
            </View>
        </View>
    )
}


export default TeactherItem