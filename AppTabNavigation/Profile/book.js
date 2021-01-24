import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, ThemeColors} from 'react-navigation';
import * as MailComposer from 'expo-mail-composer';
import uuid from 'react-uuid'

import Book from '../BookTab';
import { on } from 'events';


export default class BookScreen extends React.Component{
    
    constructor() {
        super();
        this.state = {
            modalVisible: false,
            seg:1,
            backgroundColor:'white',
            btbc:'white',
            opacity:1,
            ds:false,
        };
    }
    openModal=()=>{
        this.setState({
            modalVisible:true
        })
    }
    yalert=()=>{
        if(this.state.seg==1){
            this.setState({
                seg:2,
                backgroundColor:'#b3b3b3',
                btbc:'#b3b3b3',
                opacity:0.5,
                ds:true,
            })
        }
     
    }
    
    alertSave=()=>{
        Alert.alert(
            "판매완료",
            "상태를 수정하시겠습니까?\n \n 주의) 수정할 수 없습니다."
            ,
            [
                {text:'아니오', onPress:()=>null},
                {text:'예',onPress:this.yalert},
            ],
            {cancelable:true}
        )
        
    }
    closeModal=()=>{
        this.setState({
            modalVisible:false
        })
    }
    render(){
        return(
            <View style={{margin:1,flexDirection:'row',borderWidth:0.5,
            borderColor:'black',backgroundColor:this.state.backgroundColor,opacity:this.state.opacity} }>
                <View>
                <Book visible={this.state.modalVisible} closeModal = {this.closeModal.bind(this)} bookName={this.props.name} className={this.props.className} price={this.props.price}
                    publisher={this.props.publisher} bookCondition={this.props.bookCondition} img = {this.props.img}/>
                    <TouchableOpacity  onPress={this.openModal.bind(this)}>
                    <Image style={styles.image}
                    source={this.props.img}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookcontent}>
                    <View style={styles.textcontent}>
                        <Text style={styles.bookDescribeTitle}>{this.props.name}</Text>
                        <Text style={ styles.bookDescribe}>🎓 {this.props.className}</Text>
                        <Text style={ styles.bookDescribe}>💲 {this.props.price}</Text>
                    </View>
                    <View style={styles.buttoncontent}>
                        <Segment style={{backgroundColor:this.state.btbc}} >
                            <Button style={{
									backgroundColor: this.state.seg === 1 ? "#303D74" : 'white',
									borderColor: "#303D74",
                                }}
                                disabled={this.state.ds}
								first
								active={this.state.seg === 1 ? true : false}
								>
                            <Text style={{ color: this.state.seg === 1 ? "white" : "#303D74" }}>  판매중  </Text>
                            </Button>
                            <Button last
								style={{
									backgroundColor: this.state.seg === 2 ? "#303D74" : 'white',
									borderColor: "#303D74",
                                }}
                                disabled={this.state.ds}
								active={this.state.seg === 2 ? true : false}
								onPress={this.alertSave}>
                                <Text style={{ color: this.state.seg === 1 ? "#303D74" : "white" }}>  판매완료  </Text>
                            </Button>
                        </Segment> 
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    image:{
        borderWidth:0.5,
        borderColor:'black',
        margin:15,
        width:100,
        height:150,
      },
      bookcontent:{
        margin:15,
        flexDirection:'column',
      },
      textcontent:{
          flex:1,
      },
      buttoncontent:{
          flexDirection:'row',
          flex:1,
      },
      whatbook:{
        margin:1,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'black',
      },
      bookDescribeTitle:{
        fontSize: 20,
        marginBottom:20
    },
      bookDescribe:{
        fontSize: 15,
        marginBottom:3,
    },
})