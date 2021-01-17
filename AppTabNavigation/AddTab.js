import React from 'react';
import {View, Text, Button, StyleSheet,TextInput, Alert, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default class AddTab extends React.Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'add-outline' size = {26} style = {{color:tintColor}}/>
        )
    }
    


    alertSave = () => {
        Alert.alert(
            "글쓰기",
            " 도서명 : 밍밍 프로그래밍 \n 출판사 : 마티니 출판 \n 수업과목 : 고급 C 프로그래밍 \n 판매가격 : 10,000원 \n 훼손상태 : 표지 낙서 약간 \n 연락처 : 01090655436 \n 사진 \n\n 저장하시겠습니까?",
            [
                {text: '아니오', onPress: () => null},
                {text: '예', onPress: this.props.navigation.goBack()}, // 21.01.15 아니오 누르면 에러 안 뜸 / 예 누르면 에러 뜸 
            ],
            { cancelable: true }
        )
    }

    //카메라 & 갤러리 react-native permission 추가해야 함

    state ={
        item: null
    }
   
    render(){
        return (
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
                    style={{backgroundColor: 'white'}}
                    itemStyle={{justifyContent: 'flex-start'}}
                    //selectItemStyle={{justifyContent: 'center'}, {color: 'Black'}}
                    dropDownStyle={{backgroundColor: 'white'}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
                                            
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"도서명"}/>
                
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"출판사"}/>
               
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"수업 과목"}/>
                
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"판매 가격"}/>
                
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"훼손 상태"}/>
                
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"연락처"}/>
               
                <TextInput 
                        style={styles.textForm} 
                        placeholder={"사진 불러오기  or  카메라 촬영"}/>   
                </View>
                <View style={styles.buttonclick}>
                    <TouchableOpacity>
                        <Ionicons name = 'add-circle-outline' size = {50} onPress={this.alertSave}/>
                    </TouchableOpacity>
                </View>
            </View>
        ); // 21.01.15 왜 에러가 뜰까...
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formArea: {
        flex:0.8,
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
        justifyContent:'space-between',
    },
})