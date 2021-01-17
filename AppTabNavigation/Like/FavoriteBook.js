import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default class FavoriteBook extends React.Component{
    
    constructor() {
        super();
        this.state = {
            heartColor:"#fa576d"
        };
    }

    

    updateHeartColor = () => {
        if(this.state.heartColor === "#fa576d"){
            this.setState({
                heartColor:'lightgray'
            })
        }else{
            this.setState({
                heartColor:'#fa576d'
            })
        }
        this.alertDelete()
    }
 
    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(this.props.phone, 'App Testing\n안녕하세요! 판매중이신 "' + this.props.name + '" 책을 구입하고 싶어요!!'); //고정된 메세지를 보낼 수 있게 한다
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };
    
    alertDelete = () => {
        Alert.alert("관심목록", "삭제되었습니다")
    }

    alertPush = () => {
        Alert.alert("판매페이지로 넘어갑니다")
    }

    render() {
        return (
        <View style={{ borderBottomColor:'lightgrey', borderBottomWidth:1}}>
            <TouchableOpacity style={styles.ItemStyle} onPress={this.alertPush}>
                <Image style={styles.bookImage} source={this.props.img} />
                <View style={{ width:200,  flexDirection:'column',fontSize: 20}}>
                    <Text style={styles.bookDescribe}>{this.props.name}</Text>
                    <Text style={ {fontSize: 15,  marginBottom:3}}>{this.props.className}</Text>
                    <Text style={ {fontSize: 15,  marginBottom:3}}>{this.props.price}</Text>
                </View>
                <View style={{justifyContent:'space-around', flex:1, alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart' color = {this.state.heartColor} size = {30} onPress={this.updateHeartColor.bind(this)}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>    
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    ItemStyle:{
        marginBottom:0,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin:5,
        paddingLeft: 25,
        paddingRight: 25
    },    
    bookImage:{
        width: 90,
        marginBottom:5,
        height:120,
    },
    bookDescribe:{
        fontSize: 20,
        marginBottom:10
    },
});