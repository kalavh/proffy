import React from 'react';
import { View,Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles'

import backIcon from '../../images/icons/back.png'
import logoImg from '../../images/logo.png'


function PageHeader() {
    function handleGoBack() {
        console.log(1)
    }
    return (
    <View style={styles.container}>
       <View style={styles.topBar}>
            <BorderlessButton onPress={PageHeader}>
                <Image source={backIcon} resizeMode="contain"/>
            </BorderlessButton>

            <Image source={logoImg}  resizeMode="contain" />
       </View>
    </View>
    )
}


export default PageHeader;