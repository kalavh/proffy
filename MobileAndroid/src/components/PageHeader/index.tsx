import React from 'react';
import { View,Image,Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles'

import backIcon from '../../images/icons/back.png'
import logoImg from '../../images/logo.png'

interface pageHeaderProps{
    title: string,
}


const PageHeader:React.FC<pageHeaderProps> = ({title}) => {
    
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
       <Text style={styles.title} >  {title} </Text>
    </View>
    )
}


export default PageHeader;