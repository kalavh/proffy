import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import LandingImg from '../../images/landing.png';
import studyIcon from '../../images/icons/study.png';
import giveClassesIcon from '../../images/icons/give-classes.png';
import heartIcon from '../../images/icons/heart.png'
import styles from './styles';

function Landing() {
    const navigation = useNavigation();

    function handleNavigateToGiveClassesPages() {
        navigation.navigate('GiveClasses');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={LandingImg} />
        <Text style= {styles.title}> Welcome {'\n'}
        <Text style= {styles.titleBold}>The app to improve your knowledge</Text> 
         </Text>

         <View style={styles.buttonsContainer}>
            <TouchableOpacity 
             style={[ styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon} /> 
                    <Text style={styles.buttonText}> Study </Text>
            </TouchableOpacity>

            <TouchableOpacity  
            onPress={handleNavigateToGiveClassesPages}
             style={[ styles.button,styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} /> 
                    <Text style={styles.buttonText}> Give Classes </Text>
            </TouchableOpacity>

         </View>

         <Text style={styles.totalConnections}>
                999 Connections {' '}
                <Image source={heartIcon} />
            </Text>
        </View>

    )
}

export default Landing;