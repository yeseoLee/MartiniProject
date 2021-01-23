import React from 'react';
import {Text, StyleSheet, View, Modal, Image, Alert, TouchableOpacity} from 'react-native';
import { Header, Left,  Body, Button} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

export default class BookTab extends React.Component{
    


    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(this.props.phone, 'App Testing\n안녕하세요! 판매중이신 "' + this.props.name + '" 책을 구입하고 싶어요!!'); //고정된 메세지를 보낼 수 있게 한다
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };

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

    alertAdd = () => {
        Alert.alert("관심목록", "추가되었습니다")
    }

    alertDelete = () => {
        Alert.alert("관심목록", "삭제되었습니다")
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

<View style={styles.Container}>
            <View style={styles.UpperContainer}>
                <View style={styles.Imgborder}>
                    <Image style={styles.bookImage} source = {this.props.img}/>
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize: 20, marginBottom:10}}>{this.props.bookName}</Text> 
                    <View style={styles.sell}>
                        <View style={styles.inforName}>
                            <Text style={styles.infor1}>출판사</Text>
                            <Text style={styles.infor1}>카테고리</Text>
                            <Text style={styles.infor1}>과목명</Text>
                            <Text style={styles.infor1}>가격</Text>
                            <Text style={styles.infor1}>찜하기</Text>
                        </View>
                        <View style={styles.inforDetail}>
                            <Text style={styles.infor2}>{this.props.publisher}</Text>
                            <Text style={styles.infor2}> {this.props.category}</Text>
                            <Text style={styles.infor2}>{this.props.className}</Text>
                            <Text style={styles.infor2}>{this.props.price}원</Text>
                            <TouchableOpacity>
                            <Ionicons name = 'heart' color = {this.state.heartColor} size = {30} onPress={this.updateHeartColor.bind(this)}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
</View>
            <View style={styles.BottomContainer}>
                <View>
                    <Text style={styles.Seller}> 훼손 상태 및 부가 설명</Text>
                    <View style={styles.detail}>
                        <Text style={styles.bookDescribeButtom}>훼손상태: {this.props.bookCondition}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.Message}>
                <Text style={styles.Seller}>판매자에게 연락</Text>
                <TouchableOpacity onPress={this.props.getSMS}>                    
                    <Ionicons name = 'arrow-back' size = {30} />
                </TouchableOpacity>
            </View>
            
            </View>
        </Modal>)
    }
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'column',
        flex:1,
    },    
    Seller:{
        paddingTop:30,  
        paddingLeft:30,
        fontSize:18,
    },
    Imgborder:{
        borderWidth:3,
        borderColor:'#303D74',
    },
    sell:{
        flexDirection:'row'
    },
    inforName:{
        flexDirection:'column',
        color:'red',
        marginRight:10,
    },
    inforDetail:{
        flexDirection:'column',
    },
    infor1:{
        color:'gray',
        fontSize:15
    },
    infor2:{
      fontSize:15
    },
    detail:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
        paddingTop:10,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        marginBottom:20,
        borderRadius:10,
        borderColor:'#303D74',
        borderWidth:2,
    },
    UpperContainer: {
        paddingBottom:20,
        paddingTop:20,
        borderBottomColor:"lightgray",
        borderBottomWidth:2,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
  
    },
    BottomContainer:{
        borderBottomColor:"lightgray",
        borderBottomWidth:2,

    },
    ButtonContainer:{
        color:'orange',
        borderRadius:5,
        borderColor:'white',
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
        width: 100,
        marginBottom:5,
        height:150,
    },
    bookDescribeButtom:{
        fontSize:15
    },
    Message:{
        borderBottomColor:"lightgray",
        borderBottomWidth:2,
    }
})