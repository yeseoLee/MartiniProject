import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, ThemeColors} from 'react-navigation';


import NotiScreen from './Profile/Noti';
import MypageScreen from './Profile/Mypage';


const AppNavigator=createStackNavigator({
  Mypage: {screen:MypageScreen},
  이용안내:{screen:NotiScreen},
});
const AppContainer=createAppContainer(AppNavigator);

export default class ProfileTab extends React.Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Ionicons name = 'person' size = {26} style = {{color:tintColor}}/>
    )
  }
    render() {
      return (
        <AppContainer/>
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