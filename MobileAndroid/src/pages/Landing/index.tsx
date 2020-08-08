import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'

import LandingImg from '../../images/landing.png';
import studyIcon from '../../images/icons/study.png';
import giveClassesIcon from '../../images/icons/give-classes.png';
import styles from './styles';

function Landing() {
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={LandingImg} />
        <Text style= {styles.title}> Welcome {'\n'}
        <Text style= {styles.titleBold}>The app to improve your knowledge</Text> 
         </Text>

         <View style={styles.buttonsContaienr}>
            <TouchableOpacity 
             style={[ styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon} /> 
                    <Text style={styles.buttonText}> Study </Text>
            </TouchableOpacity>

            <TouchableOpacity 
             style={[ styles.button,styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} /> 
                    <Text style={styles.buttonText}> Give Classes </Text>
            </TouchableOpacity>
         </View>

        </View>

    )
}

export default Landing;