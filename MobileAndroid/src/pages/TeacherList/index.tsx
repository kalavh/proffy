import React from 'react';
import { View, ScrollView ,Text} from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';
import { TextInput } from 'react-native-gesture-handler';

function TeatcherList() {
    return (
    <View style={styles.container}>

        <PageHeader title="Teatchers">
         <View style={styles.searchForm}>
           
            <Text style={styles.label}>Subject</Text>
            <TextInput 
             style={styles.input}
             placeholder='Choose Subject'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput 
                style={styles.input}
                placeholder='Choose WeekDay'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput 
                style={styles.input}
                placeholder='Choose Time'
                />
              </View>

            </View>
         </View>
        </PageHeader>

        <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24,
        }}>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
            
        </ScrollView>
        
       
    </View>)
}


export default TeatcherList;