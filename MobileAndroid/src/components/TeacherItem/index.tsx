import React from 'react'
import {View,Image,Text} from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../images/icons/heart-outline.png'
import unfavoriteIcon from '../../images/icons/unfavorite.png'
import whatsappIcon from '../../images/icons/whatsapp.png'

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
                <Text style={styles.bio}>
                    Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown
                </Text>

                  <View style={styles.footer} >
                     <Text style={styles.price}> Price(Hour){' '}</Text>
                     <Text style={styles.priceValue}> 20,00 US </Text>
                </View>

                <View style={styles.buttonsContainer} >
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButttonText}> Send Menssage</Text>
                    </RectButton>
                

            </View>
        </View>
    )
}


export default TeactherItem