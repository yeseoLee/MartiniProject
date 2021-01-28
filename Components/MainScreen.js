import React from 'react';
import {StyleSheet, View, Text, Button, Platform, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Card } from 'react-native-paper';

import HomeTab from '../AppTabNavigation/HomeTabMain';
import LikeTab from '../AppTabNavigation/LikeTab';
import ProfileTab from '../AppTabNavigation/ProfileTab';
import AddTab from '../AppTabNavigation/AddTab';
import Loading from '../Components/Loading';

//하단 탭 네비게이션
const AppTabNavigator = createBottomTabNavigator({
    Home: {screen:HomeTab,
        navigationOptions : ({navigation}) => ({
            tabBarOnPress: () => {
                navigation.navigate("Home");
            }
        })},
    Add: {screen:AddTab}, 
    Like: {screen:LikeTab},  
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

    state = {
        appHasLoaded: true
    }

    render(){
        return (
            <View style={styles.container}>
                <Card>
                    <Loading />
                </Card>
            </View>,
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

