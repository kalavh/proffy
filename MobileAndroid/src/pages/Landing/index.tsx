import React from 'react'
import {View,Text,Image} from 'react-native'

import LandingImg from '../../images/landing.png'
import styles from './styles'

function Landing() {
    return (
        <View>
            <Image source={LandingImg} />
        </View>

    )
}

export default Landing;