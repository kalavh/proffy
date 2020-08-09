import React, { useState } from 'react';
import { View, ScrollView ,Text,TextInput } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';
import { BorderlessButton,RectButton } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


function TeatcherList() {
    const [isFiltersVisible,setIsFiltersVisible] = useState(false);
    
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
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

                <RectButton style={styles.submitButton} >
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
                <TeactherItem/>
                <TeactherItem/>
                <TeactherItem/>
                <TeactherItem/>
                
            </ScrollView>
            
        
        </View>
        )
}


export default TeatcherList;