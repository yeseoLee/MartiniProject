import React from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeTab from '../AppTabNavigation/HomeTab';
import LikeTab from '../AppTabNavigation/LikeTab';
import ProfileTab from '../AppTabNavigation/ProfileTab';
import AddTab from '../AppTabNavigation/AddTab';

//하단 탭 네비게이션
const AppTabNavigator = createBottomTabNavigator({
    Home: {screen:HomeTab}, //210114 네이밍변경(아현)
    Add: {screen:AddTab}, //210114 네이밍,순서변경(아현)
    Like: {screen:LikeTab}, //210114 네이밍,순서변경(아현)
    Profile: {screen:ProfileTab}, //210114 네이밍변경(아현)
}, {
    swipeEnabled: true,
    tabBarOptions: {
        style:{
            backgroundColor:'white'
        },
        iconStyle: {
            ...Platform.select({
                ios:{
                    height: 35,
                    marginBottom: 20
                }
            })
        },
        activeTintColor: '#303D74',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
    
});
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends React.Component{

    //상단 네비게이션
    static navigationOptions =  {
        headerLeft: () => (<Ionicons name = "reorder-four-outline" size = {30} style = {{color:"#303D74"}}/>),
        title:'Library DataScience'
    }

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