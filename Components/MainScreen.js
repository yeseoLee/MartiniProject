import React from 'react';
import {StyleSheet, View, Text, Button, Platform, StatusBar} from 'react-native';
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
    Like: LikeTab,  //이렇게 하면 에러 해결이라하는데, 차이를 모르겠다. 해결이 안된다
    Profile: {screen:ProfileTab}, 
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
const AppTabContainer = createAppContainer(AppTabNavigator);

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
            <StatusBar backgroundColor='black'/>,
            <AppTabContainer/>
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

