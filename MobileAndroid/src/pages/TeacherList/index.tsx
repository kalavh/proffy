import React from 'react';
import { View,ScrollView } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';

function TeatcherList() {
    return (
    <View style={styles.container}>
        <PageHeader title="Teatchers"/>
        <ScrollView>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
        </ScrollView>
        
       
    </View>)
}


export default TeatcherList;