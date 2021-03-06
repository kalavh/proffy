import React from 'react'
import {View,Image,Text, Linking} from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../images/icons/heart-outline.png'
import unfavoriteIcon from '../../images/icons/unfavorite.png'
import whatsappIcon from '../../images/icons/whatsapp.png'


export interface Teacher { 
    id: number; 
    avatar: string; 
    bio: string; 
    cost: number; 
    name: string; 
    subject: string; 
    whatsapp: string; 

}

interface TeacherItemProps {
    teacher: Teacher
}

const  TeactherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp} ` )
        
    }

    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image style={styles.avatar}
                source={{uri: teacher.avatar  } } 
                />
                <View style={styles.proFileInfo}>
                    <Text style={styles.name}>{teacher.name} </Text>
                    <Text style={styles.subject}>{teacher.subject} </Text>
                </View>
            </View>
                <Text style={styles.bio}>
                             {teacher.bio}
                </Text>

                  <View style={styles.footer} >
                     <Text style={styles.price}> Price(Hour){' '}</Text>
                     <Text style={styles.priceValue}> {teacher.cost}US </Text>
                </View>

                <View style={styles.buttonsContainer} >
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp} > 
                        <Image source={whatsappIcon}  />
                        <Text style={styles.contactButttonText}> Send Menssage</Text>
                    </RectButton>
                

            </View>
        </View>
    )
}


export default TeactherItem