import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default class FavoriteBook extends React.Component{
    
    constructor() {
        super();
    }

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(['01040941308'], '군-바');
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };
    
    alertDelete = () => {
        Alert.alert("관심목록", "삭제되었습니다")
    }

    render() {
        return (
        <View style={styles.ItemStyle}>
            <Image style={styles.bookImage} source={require("../bookImg.jpg")} />
            <Text style={styles.bookDescribe}>{this.props.name}</Text>
            <View style={justifyContent='space-around'}>
                <TouchableOpacity>
                    <Ionicons name = 'heart-outline' size = {50} onPress={this.alertDelete}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name = 'chatbubble-ellipses-outline' onPress={this.getSMS} size = {50}/>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    ItemStyle:{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin:5,
        paddingLeft: 15,
        paddingRight: 15
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