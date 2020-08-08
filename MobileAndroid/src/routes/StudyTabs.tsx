import React from 'react';
import ReactNative from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList/index';
import Favorites from '../pages/Favorites/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGraduationCap,faUserMd } from '@fortawesome/free-solid-svg-icons'


const { Navigator, Screen } = createBottomTabNavigator();




function StudyTabs() {
    return (
        <Navigator  tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0 ,
                height: 64,
             },
             tabStyle:{
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
             },
             iconStyle: {
                 flex: 0,
                 width: 20,
                 height: 20,
             },
             labelStyle:{
                 fontSize: 13,
                 marginLeft: 16,
             },
             inactiveBackgroundColor: '#fafafc',
             activeBackgroundColor: '#ebebf5',
             inactiveTintColor: '#c1bccc',
             activeTintColor: '#32264d'

             
        }}>
           
            <Screen 
            name="Favorites"  
            component={Favorites}
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: () => {
                    return(
                        <FontAwesomeIcon icon={ faGraduationCap } />
                    );
                } 
            }} />

            <Screen name="TeacherList" 
            component={TeacherList}
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: () => {
                    return(
                        <FontAwesomeIcon icon={ faUserMd } />
                    );
                } 
            }} />
        </Navigator>
    )
}

export default StudyTabs;
