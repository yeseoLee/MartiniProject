import React from 'react';
import {View, Text, StyleSheet,TextInput, Alert,ScrollView,Button} from 'react-native';
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
            "도서명:"+this.inputText1+"\n"+
            "출판사:"+this.inputText2+"\n"+
            "수업 과목:"+this.inputText3+"\n"+
            "판매 가격:"+this.inputText4+"\n"+
            "훼손 상태:"+this.inputText5+"\n"+
            "연락처:"+this.inputText6+"\n"+
            "\n"+
            "판매 정보를 확인해주세요."
        )

        console.log(this.inputText1,
            this.inputText2,this.inputText3,this.inputText4,this.inputText5,this.inputText6,)
    }
    
    alertImage = () => {
        Alert.alert(
            "이미지불러오기"
        )
    }
   
    render(){
        return (
            <View>
            <Header style={styles.header}>
                <Left>
                    <Text style={styles.headertext}>글쓰기</Text>
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
                        itemStyle={{justifyContent: 'flex-start'}}
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
                </View>
                <View style={styles.Image}>

                    <Button title="이미지" onPress={this.alertImage} color='#888'/>

                </View>

                <View style={styles.buttonclick}>
                    
                    <Button title="  등록  " onPress={this.alertSave} color='#303D74' size='100'/>
                    
                </View>
            </View>
        </ScrollView>
        </View>
        );
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
        marginBottom:12
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
    },
    Image:{
        width: '70%',
        marginBottom: 30,
    }
})