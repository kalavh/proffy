import React, { useState } from 'react';
import { View, ScrollView ,Text} from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';
import { TextInput } from 'react-native-gesture-handler';

function TeatcherList() {
    const [isFiltersVisible,setIsVisible] = useState(false);
    
    return (
    <View style={styles.container}>

        <PageHeader title="Teatchers">
        { isFiltersVisible && ( 
            <View style={styles.searchForm}>
            
                <Text style={styles.label}>Subject</Text>
                <TextInput 
                style={styles.input}
                placeholder='Choose Subject'
                placeholderTextColor='#c1bccc'
                />

                <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Week Day</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Choose WeekDay'
                    placeholderTextColor='#c1bccc'
                    />
                </View>

                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Time</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Choose Time'
                    placeholderTextColor='#c1bccc'
                    />
                </View>

                </View>
            </View>
            )}
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
            
        
        </View>
        )
}


export default TeatcherList;