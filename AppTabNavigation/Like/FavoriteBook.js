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
                <View style={{ width:200,  flexDirection:'column'}}>
                    <Text style={styles.bookDescribeTitle}>{this.props.name}</Text>
                    <Text style={ styles.bookDescribe}>🎓 {this.props.className}</Text>
                    <Text style={ styles.bookDescribe}>💲 {this.props.price}</Text>
                </View>
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

        // <View style={styles.ItemStyle}>
        // <Image style={styles.bookImage} source={require("./Profile/images/statistic.png")} />
        // <View style={styles.bookDescribe}>
        //     <Text style={ fontSize: 20,  marginBottom:10 }>통계학개론 제 3판</Text>
        //     <Text style={ fontSize: 15,  marginBottom:3}>통계학개론</Text>
        //     <Text style={ fontSize: 15,  marginBottom:3}>17,000 원</Text>
        // </View>
        // <View style={justifyContent='space-around'}>
        //     <TouchableOpacity>
        //         <Ionicons name = 'heart' size = {30} onPress={this.alertDelete} color='#F15F5F'/>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={this.getSMS}>
        //         <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
        //     </TouchableOpacity>
        // </View>
        // </View>
        );
    }
}

const styles = StyleSheet.create({
    
    ItemStyle:{
        marginBottom:0,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        margin:5,
        paddingLeft: 25,
        paddingRight: 25
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
        fontSize: 15,
        marginBottom:3
    },
});