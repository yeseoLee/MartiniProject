import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default function FavoriteBookFuc({name}){
    

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(['01040941308'], 'React Native SMS!!');
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };
    
        return (
        <View style={styles.ItemStyle}>
            <Image style={styles.bookImage} source={require("../bookImg.jpg")} />
            <Text style={styles.bookDescribe}>{name}</Text>
            <View style={justifyContent='space-around'}>
                <TouchableOpacity>
                    <Ionicons name = 'heart-outline' size = {50}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name = 'chatbubble-ellipses-outline' onPress={this.getSMS} size = {50}/>
                </TouchableOpacity>
            </View>
        </View>
        );

}

const styles = StyleSheet.create({
    
    ItemStyle:{
        height: '18%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'row',
    },    
    bookImage:{
        width: '20%',
        height:'80%',
        paddingLeft: 10
    },
    bookDescribe:{
        fontSize: 20
    },
});