import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch} from 'react-native';
import{Header,Body,Container}from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, ThemeColors} from 'react-navigation';
import * as MailComposer from 'expo-mail-composer';
import uuid from 'react-uuid'

export default class BookScreen extends React.Component{
    state={
        eventSwtichIsOn:false,
    }
    render(){
        return(
            <View style={styles.whatbook}>
                <View>
                    <Image style={styles.image}
                    source={this.props.img}/>
                </View>
                <View style={styles.bookcontent}>
                    <Text>{this.props.name}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text>{this.state.eventSwtichIsOn?'판매중':'판매완료'}</Text>
                    <Switch
                        onValueChange={value=>this.setState({eventSwtichIsOn:value})}
                        style={{marginBottom:10}}
                        trackColor={{
                        true:'#303D73',
                        }}
                        value={this.state.eventSwtichIsOn}
                    />
                </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    image:{
        borderWidth:0.5,
        borderColor:'black',
        margin:15,
        width:100,
        height:150,
      },
      bookcontent:{
        margin:15
      },
      whatbook:{
        margin:1,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'black'
      },
})