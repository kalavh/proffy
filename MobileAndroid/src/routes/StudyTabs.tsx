import React from 'react';
import ReactNative from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList/index';
import Favorites from '../pages/Favorites/index';

const { Navigator, Screen } = createBottomTabNavigator();




function StudyTabs() {
    return (
        <Navigator>
            <Screen name="Favorites"  component={Favorites} />
            <Screen name="TeacherList" component={TeacherList} />
        </Navigator>
    )
}

export default StudyTabs;