import React from 'react';
import {Text, StyleSheet, View, Modal, Image, Alert, TouchableOpacity} from 'react-native';
import { Header, Left,  Body, Button} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default class BookTab extends React.Component{
    
    constructor(props) {
        super(props);
    }

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(this.props.phone, 'App Testing\n안녕하세요! 판매중이신 "' + this.props.name + '" 책을 구입하고 싶어요!!'); //고정된 메세지를 보낼 수 있게 한다
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };
    
    alertPush = () => {
        Alert.alert("문자를 보냅니다")
    }

    
    render() {
        return(
        <Modal visible={this.props.visible} animationType='fade' onRequestClose={this.props.closeModal}>
            <Header style={styles.header}>
                <Left>
                <TouchableOpacity onPress={this.props.closeModal}>                    
                    <Ionicons name = 'arrow-back' size = {30} />
                </TouchableOpacity>
                </Left>
                <Body></Body>
            </Header>
            <View style={styles.UpperContainer}>
                <Image style={styles.bookImage} source = {this.props.img}/>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize: 20, marginBottom:10}}>{this.props.bookName}</Text>
                    <Text style={styles.bookDescribe}>{this.props.publisher}</Text>
                    <Text style={styles.bookDescribe}>{this.props.price}</Text>
                </View>
            </View>
            <View style={styles.ButtomContainer}>
                <View>
                    <Text style={styles.bookDescribeButtom}>교재명: {this.props.bookName}</Text>
                    <Text style={styles.bookDescribeButtom}>가격: {this.props.price}</Text>
                    <Text style={styles.bookDescribeButtom}>수업과목: {this.props.className}</Text>
                    <Text style={styles.bookDescribeButtom}>훼손상태: {this.props.bookCondition}</Text>
                </View>
            </View>
            <View style={styles.ButtonContainer}>
                <Button title="판매자에게 쪽지 보내기" color = "#303D74" onPress={this.alertPush.bind(this)}></Button>
            </View>
        </Modal>)
    }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:"#303D74", 
        justifyContent: 'space-between',
        alignItems:'center',
        padding:20
    },    
    UpperContainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        flex:1,
        borderRadius: 20
    },
    ButtomContainer:{
        justifyContent:"space-around",
        flex:1,
        borderRadius: 20
    },
    ButtonContainer:{
        alignItems:'center', 
        justifyContent:'center',
        flex:1,
        borderRadius: 20
    },
    header:{
        backgroundColor:'white',
        alignItems:'flex-start'
    },
    headertext:{
        marginLeft:5,
        fontSize:20,
        alignItems:'flex-start'
    },
    bookImage:{
        width: 150,
        marginBottom:5,
        height:200,
    },
    bookDescribe:{
        fontSize: 15,
        marginBottom:3
    },
    bookDescribeButtom:{
        fontSize: 20,
        paddingLeft: 40,
        marginBottom:3
    }
})