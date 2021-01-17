import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch,FlatList} from 'react-native';
import{Header,Body,Container}from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, ThemeColors} from 'react-navigation';

export default class UserScreen extends React.Component{
    render(){
        return(
            <View style={styles.user}>
          <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 100}}>
              <View style={{width: 100, height: 100}} >
                <Image source={require('./images/sadfrog.png')} style={{width: 100, height: 100}}/>
              </View>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{fontSize: 30}}>닉네임</Text>
              <Text style={{color: 'gray', fontSize: 15}}>이름:</Text>
              <Text style={{color: 'gray', fontSize: 15}}>학번:</Text>
            </View>
          </View>
          <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./images/list.png')} style={{width: 30, height: 25}}/>
              <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
            </View>
          </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    user:{
        margin:15,
        backgroundColor:'white',
      }
})
