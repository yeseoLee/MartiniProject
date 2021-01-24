import React from 'react';
import {View, Text, StyleSheet,TextInput, Alert, TouchableOpacity,ScrollView,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Header, Left, Body} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddTab extends React.Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'add-outline' size = {26} style = {{color:tintColor}}/>
        )
    }
    constructor(){
        super();
        this.state={
            text:"hello",
            item: null,
        }
        this.inputText1='';
        this.inputText2='';
        this.inputText3='';
        this.inputText4='';
        this.inputText5='';
        this.inputText6='';
    }


    changeText1=(value)=>{
        this.inputText1=value;
    }
    changeText2=(value)=>{
        this.inputText2=value;
    }
    changeText3=(value)=>{
        this.inputText3=value;
    }
    changeText4=(value)=>{
        this.inputText4=value;
    }
    changeText5=(value)=>{
        this.inputText5=value;
    }
    changeText6=(value)=>{
        this.inputText6=value;
    }

    alertSave = () => {
        Alert.alert(
            "글쓰기",
            "판매글을 작성하시겠습니까?",
            [
                {text: '아니오', onPress: () => null},
                {text: '예', onPress: this.props.navigation.goBack()}, // 21.01.15 아니오 누르면 에러 안 뜸 / 예 누르면 에러 뜸 
            ],
            { cancelable: true }
        )

        console.log(this.inputText1,
            this.inputText2,this.inputText3,this.inputText4,this.inputText5,this.inputText6,)
    }

    //카메라 & 갤러리 react-native permission 추가해야 함

   
    render(){
        return (
            <View>
            <Header style={styles.header}>
                <Left>
                    <Text style={styles.headertext}>  글쓰기</Text>
                </Left>
                <Body></Body>
            </Header>
            <ScrollView>
            
            <View style={styles.container}>
                <View style={styles.formArea}>
                    <DropDownPicker
                        items={[
                            {label: '전공', value: 'item1'},
                            {label: '비전공', value: 'item2'},
                            {label: '기타', value: 'item3'},
                        ]}

                        defaultNull={this.state.item === null}

                        placeholder="카테고리"
                        placeholderStyle={{color: '#888'}}

                        containerStyle={{height: 45}}
                    /*style={{backgroundColor: 'white'}}*/
                        itemStyle={{justifyContent: 'flex-start'}}
                    //selectItemStyle={{justifyContent: 'center'}, {color: 'Black'}}
                   /* dropDownStyle={{backgroundColor: 'white'}}*/
                        onChangeItem={item => console.log(item.label, item.value)}
                   />
                                            
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"도서명"}
                        onChangeText={this.changeText1}
                        
                        />
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"출판사"}
                        onChangeText={this.changeText2}
                        />
               
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"수업 과목"}
                        onChangeText={this.changeText3}
                        />
                
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"판매 가격"}
                        onChangeText={this.changeText4}
                        />
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"훼손 상태"}
                        onChangeText={this.changeText5}
                        />
                
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"연락처"}
                        onChangeText={this.changeText6}
                        />
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"사진 불러오기  or  카메라 촬영"}/>   
                </View>

                <View style={styles.buttonclick}>
                    
                        <Button title="  등록  " onPress={this.alertSave} color='#303D74' size='100'/>
                    
                </View>
            </View>
        </ScrollView>
        </View>
        ); // 21.01.15 왜 에러가 뜰까...
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
       paddingTop:10,
       marginBottom:70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formArea: {
        width: '70%',
        marginBottom:30
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: 45,
        paddingLeft: 5,
        marginTop:12
    },
    buttonclick: {
        flexDirection:'row',
        justifyContent:'center',
    },
    header:{
        backgroundColor:'white',
    },
    
    headertext:{
        marginLeft:5,
        color:'#303D74',
        fontSize:20,
        alignItems:'flex-start'
    }
})