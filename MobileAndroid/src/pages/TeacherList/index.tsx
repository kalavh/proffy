import React, { useState } from 'react';
import { View, ScrollView ,Text,TextInput } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem,{Teacher} from '../../components/TeacherItem';
import { BorderlessButton,RectButton } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api';


function TeatcherList() {

    const [isFiltersVisible,setIsFiltersVisible] = useState(false);
    const [subject,  setSubject ] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time,         setTime] = useState('');
    const [teachers,   setTeachers] = useState([]);


    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

   async function handleFiltesSubimit() {
        const res = await api.get('classes', {
            params:{ 
                subject,
                week_day,
                time
            }
        })
        setTeachers(res.data)
        console.log(res.data)
        setIsFiltersVisible(false)
    }

    return (
    <View style={styles.container}>

        <PageHeader title="Teatchers" headerRight={(
         <BorderlessButton onPress={handleToggleFiltersVisible}>
           <FontAwesomeIcon icon={ faFilter }/>
         </BorderlessButton>
        )}>
        { isFiltersVisible && ( 
            <View style={styles.searchForm}>
            
                <Text style={styles.label}>Subject</Text>
                <TextInput 
                style={styles.input}
                placeholder='Choose Subject'
                placeholderTextColor='#c1bccc'
                value={subject}
                onChangeText={(text)=> { setSubject(text)}}
                />

                <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Week Day</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Choose WeekDay'
                    placeholderTextColor='#c1bccc'
                    value={week_day}
                    onChangeText={(text)=> { setWeek_day(text)}}
                    />
                </View>

                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Time</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Choose Time'
                    placeholderTextColor='#c1bccc'
                    value={time}
                    onChangeText={(text)=> { setTime(text)}}
                    />
                </View>
                </View>

                <RectButton  onPress={handleFiltesSubimit} style={styles.submitButton} >
                     <Text style={styles.submitButtonText}>
                      Search 
                    </Text>
                </RectButton>

            </View>
            )}
            </PageHeader>

            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:24,
            }}>
                {teachers.map((teacher: Teacher) => {
                    <TeactherItem key={teacher.id} teacher={teacher} />
                })}
             
                
            </ScrollView>
            
        
        </View>
        )
}


export default TeatcherList;