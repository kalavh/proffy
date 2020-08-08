import React from 'react'
import {View,Text,Image} from 'react-native'

import LandingImg from '../../images/landing.png'
import styles from './styles';

function Landing() {
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={LandingImg} />
        <Text style= {styles.title}> Welcome {'\n'} The app to improve your knowledge </Text>
        </View>

    )
}

export default Landing;