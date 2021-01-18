import React from 'react';
import {Text, StyleSheet, View, Modal, Image, Button, Alert} from 'react-native';
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
        <Modal visible={this.props.visible} animationType='fade'>
            <View style={styles.UpperContainer}>
                <Button title="뒤로가기" onPress={this.props.closeModal} />
                <Image source = {this.props.img}/>
                <View style={{justifyContent:'center'}}>
                    <Text>{this.props.bookName}</Text>
                    <Text>{this.props.publisher}</Text>
                    <Text>{this.props.price}</Text>
                </View>
            </View>
            <View style={styles.ButtomContainer}>
                <Text>수업과목: {this.props.className}</Text>
                <Text>훼손상태: {this.props.bookCondition}</Text>
                <Button title="판매자에게 쪽지 보내기" color = "#303D74" onPress={this.alertPush.bind(this)}></Button>
            </View>
        </Modal>)
    }
}

const styles = StyleSheet.create({
    UpperContainer: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    ButtomContainer:{
        
    }
})