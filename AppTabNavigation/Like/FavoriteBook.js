import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import { Ionicons,FontAwesome,Entypo,FontAwesome5,Octicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

import Book from '../BookTab';

export default class FavoriteBook extends React.Component{
    
    constructor() {
        super();
        this.state = {
            heartColor:"#fa576d",
            modalVisible: false
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

    openModal = () => {
        this.setState({ 
            modalVisible:true
        })
    }
    closeModal = () => {
        this.setState({ 
            modalVisible:false
        })
    }

    render() {
        return (
        <View style={{ borderBottomColor:'lightgrey', borderBottomWidth:0.5}}>                
            <TouchableOpacity style={styles.ItemStyle} onPress={this.openModal.bind(this)}>
                    <Book visible={this.state.modalVisible} closeModal = {this.closeModal.bind(this)} bookName={this.props.name} className={this.props.className} price={this.props.price}
                    publisher={this.props.publisher} bookCondition={this.props.bookCondition} img = {this.props.img} category={this.props.category} phone={this.props.phone} />
                    <Image style={styles.bookImage} source={this.props.img} />
                    <View style={{ width:200,  flexDirection:'column'}}>
                        <Text style={styles.bookDescribeTitle}>{this.props.name}</Text>
                        <View style={styles.icontext}>
                            <FontAwesome name = 'book'  paddingRight='10'/>
                            <Text style={ styles.bookDescribe}>{this.props.className}</Text>
                        </View>
                        <View style={styles.icontext}>
                            <FontAwesome name = 'won'  paddingRight='10'/> 
                            <Text style={ styles.bookDescribe}>{this.props.price}</Text>
                       </View>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity>
                            <Ionicons name = 'heart' color = {this.state.heartColor} size = {30} onPress={this.updateHeartColor.bind(this)}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.getSMS.bind(this)}>    
                            <Ionicons name = 'chatbox-ellipses-outline' size = {30}/>
                        </TouchableOpacity>
                    </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    ItemStyle:{
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
    },    
    bookImage:{
        marginRight:20,
        width: 90,
        marginBottom:5,
        height:120,
    },
    bookDescribeTitle:{
        fontSize: 20,
        marginBottom:10
    },
    bookDescribe:{
        marginLeft:10,
        fontSize: 15,
        marginBottom:3
    },
    buttonStyle:{
        paddingRight:5,
        alignItems:'flex-end',
        flex:0.9,
    },
    icontext:{
        flexDirection:'row',
    }
});