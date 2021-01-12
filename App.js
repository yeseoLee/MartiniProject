import 'react-native-gesture-handler';
import React from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator);