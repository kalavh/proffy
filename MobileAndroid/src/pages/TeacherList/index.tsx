import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';

function TeatcherList() {
    return (
    <View style={styles.container}>
        <PageHeader title="Teatchers"/>
        <TeactherItem/>
    </View>)
}


export default TeatcherList;