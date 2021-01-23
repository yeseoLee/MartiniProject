import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert,TouchableOpacity,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';
import uuid from 'react-uuid';

import Book from '../BookTab'

const brandPrimary = 'white'

export default class BookItem extends React.Component{
    

    constructor() {
        super();
        this.state = {
            heartColor:'lightgray',
            modalVisible:false
        };
    }

    updateHeartColor = () => {
        if(this.state.heartColor === "#F15F5F"){
            this.setState({
                heartColor:'lightgray'
            })
            this.alertDelete()
        }else{
            this.setState({
                heartColor:'#F15F5F'
            })
            this.alertAdd()
        }
    }

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(this.props.phone, 'App Testing\n안녕하세요! 판매중이신 "' + this.props.BookName + '" 책을 구입하고 싶어요!!'); //고정된 메세지를 보낼 수 있게 한다
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };

    alertAdd = () => {
        Alert.alert("관심목록", "추가되었습니다")
    }

    alertDelete = () => {
        Alert.alert("관심목록", "삭제되었습니다")
    }

    openModal = () => {
        // Alert.alert("판매페이지로 넘어갑니다")
        this.setState({ 
            modalVisible:true
        })
    }
    closeModal = () => {
        // Alert.alert("판매페이지로 넘어갑니다")
        this.setState({ 
            modalVisible:false
        })
    }



    render() {
        return (
            <View style={{ borderBottomColor:'lightgrey', borderBottomWidth:1}}>                
                <TouchableOpacity style={styles.ItemStyle} onPress={this.openModal.bind(this)}>
                    <Book visible={this.state.modalVisible} closeModal = {this.closeModal.bind(this)} bookName={this.props.name} className={this.props.className} price={this.props.price}
                    publisher={this.props.publisher} bookCondition={this.props.bookCondition} img = {this.props.img}/>
                    <Image style={styles.bookImage} source={this.props.img} />
                    <View style={styles.bookDescribe}>
                        <Text style={styles.bookDescribe2}>{this.props.BookName}</Text>
                        <Text style={styles.bookDescribe3}>🎓 {this.props.ClassName}</Text>
                        <Text style={styles.bookDescribe3}>💲 {this.props.price}</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <Ionicons name = 'heart' color = {this.state.heartColor} size = {30} onPress={this.updateHeartColor.bind(this)}/>
                        </TouchableOpacity>
                    </View>
            </TouchableOpacity>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: 'gray',
    },
    search:{
        marginRight: 10,
        backgroundColor: "#ededed"
    },
    content: {
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      },
      ItemStyle:{
        // borderBottomColor:'lightgrey',
        // borderBottomWidth:1,
        alignItems: 'center',
        justifyContent:'flex-start',
        flexDirection: 'row',
        paddingLeft: 10,


    },    
    bookImage:{
        width: 90,
        marginBottom:5,
        height:120,
    },
    bookDescribe:{
        paddingLeft:30,
        flexDirection:'column',
        fontSize: 20
    },
    bookDescribe2:{
        fontSize: 20,
        marginBottom:10
    },
    bookDescribe3:{
        fontSize: 15,
        marginBottom:3
    },
    button:{
        flex:0.9,
        alignItems:'flex-end',
    }
});