import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';

import NotiScreen from './Profile/Noti';
import MypageScreen from './Profile/Mypage';


const AppNavigator=createStackNavigator({
  Mypage: {screen:MypageScreen},
  이용안내:{screen:NotiScreen},
});


export default class ProfileTab extends React.Component{
  
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Ionicons name = 'person' size = {26} style = {{color:tintColor}}/>
    )
  }

  static router=AppNavigator.router;
    render() {
      return (
        <AppNavigator navigation={this.props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    //backgroundColor:'#303D73',
  },
})