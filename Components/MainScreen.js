import React from 'react';
import {StyleSheet, View, Text, Button, Platform, Container, Header} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeTab from '../AppTabNavigation/HomeTab';
import LikeTab from '../AppTabNavigation/LikeTab';
import ProfileTab from '../AppTabNavigation/ProfileTab';
import AddTab from '../AppTabNavigation/AddTab';

//하단 탭 네비게이션
const AppTabNavigator = createBottomTabNavigator({
    Home: {screen:HomeTab},
    Add: {screen:AddTab}, 
    Like: {screen:LikeTab},
    Profile: {screen:ProfileTab}, 
});
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends React.Component{


    //상단 네비게이션
    /*static navigationOptions =  {
        headerLeft: () => (
             <Ionicons name = "reorder-four-outline" 
                            size = {30}
                            style = {{color:"#303D74"}, {marginLeft: 10}}/>
            ),

          
        title:'Library DataScience'
    }*/

    render(){
        return (

        <AppTabContainet/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})