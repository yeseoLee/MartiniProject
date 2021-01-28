import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import NotiScreen from './Profile/Noti';
import MypageScreen from './Profile/Mypage';


const AppNavigator=createStackNavigator({
  마이페이지: {screen:MypageScreen},
  이용안내:{screen:NotiScreen},
},{
  defaultNavigationOptions:{
    headerTintColor:'#303D74',
    headerTitleStyle:{
      fontWeight:'normal',
      justifyContent: 'flex-start'
    }
  }
});


export default class ProfileTab extends React.Component{
  
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Ionicons name = 'person' size = {26} style = {{color:tintColor}}/>
    ),
  }

  static router=AppNavigator.router;
    render() {
      return (
        <AppNavigator navigation={this.props.navigation}/>
      )
    }
}