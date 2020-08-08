import React from 'react';
import { View,ImageBackground,Text }  from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'

import giveClassesBgImage from '../../images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
    const {goBack }   = useNavigation(); 

    function handleNavigateBack(){
        goBack()
    }

    return(
         <View style={styles.container}>
             <ImageBackground   
             source={giveClassesBgImage} 
             style={styles.content}>

                <Text style={styles.title}>You Want to Be a teacher ??</Text>
                <Text style={styles.description}>you need to register on our web plataform</Text>

             </ImageBackground>

             <RectButton 
              onPress={handleNavigateBack} 
              style={styles.okButton}>
                 <Text style={styles.okButtonText}> Okay </Text>

             </RectButton>
         </View>
    
    )}


export default GiveClasses;