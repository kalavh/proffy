import React from 'react';
import { View,Image,Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles'

import backIcon from '../../images/icons/back.png'
import logoImg from '../../images/logo.png'
import { useNavigation } from '@react-navigation/native';

interface pageHeaderProps{
    title: string,
}


const PageHeader:React.FC<pageHeaderProps> = ({title, children}) => {
    
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }
    return (
    <View style={styles.container}>
       <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBack}>
                <Image source={backIcon} resizeMode="contain"/>
            </BorderlessButton>

            <Image source={logoImg}  resizeMode="contain" />

       </View>
       <Text style={styles.title} >  {title} </Text>
        {children}
    </View>
    )
}


export default PageHeader;