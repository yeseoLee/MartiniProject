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
        <TouchableOpacity onPress={this.alertPush}>
            <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={this.props.img} />
                <Text style={styles.bookDescribe}>{this.props.name}</Text>
                <View style={{justifyContent:'space-around', flex:1, alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart' color = {this.state.heartColor} size = {30} onPress={this.updateHeartColor.bind(this)}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>    
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
    ItemStyle:{
        //justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin:5,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        height: 100,
    },    
    bookImage:{
        height:'80%',
        paddingLeft: 10,
        flex:1,
        borderWidth: 4
    },
    bookDescribe:{
        fontSize: 20,
        flex: 3,
        paddingLeft:5
    },
});