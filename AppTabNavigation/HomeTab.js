import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert,FlatList} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, 
        Button, Left, Right, Body, Icon, Item, Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';
import uuid from 'react-uuid';

import BookItem from './Home/BookItem';

const brandPrimary = 'white';


const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: "12,000원",
     img: require("./Profile/images/c.png"),
     phone: '01066285506'
    },
    {key:  uuid(),
     title: '미분적분학1',
     className:'일변수 미적분학',
     price: '18,000원',
     img: require('./Profile/images/c.png'),
     phone: '01090655436'
    },
    {key:  uuid(),
     title: '알고리즘 원리와 응용',
     className:'알고리즘 및 실습',
     price: '13,000원',
     img: require('./Profile/images/chat.png'),
     phone: '01046785984'
    },
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '9,000원',
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '통계학개론 제 3판',
     className:'통계학개론',
     price: '17,000원',
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: '12,000원',
     img: require('./Profile/images/avatar.png'),
     phone: '01066176371'
    },
    {key:  uuid(),
     title: '미분적분학1',
     className:'일변수 미적분학',
     price: '18,000원',
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '알고리즘 원리와 응용',
     className:'알고리즘 및 실습',
     price: '13,000원',
     img: require('./Profile/images/chat.png'),
     phone: '01046785984'
    },
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '9,000원',
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '통계학개론 제 3판',
     className:'통계학개론',
     price: '17,000원',
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
];

export default class HomeTab extends React.Component{
    constructor() {
        super();
    }
    
    navigateToSub = () => {
        this.props.navigation.navigate('Sub');
      }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        )
    }

    navigateToSub = () => {
        this.props.navigation.navigate('Sub');
    }

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(['01040941308'], '군-바');
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };

    alertDelete = () => {
        Alert.alert("관심목록", "추가되었습니다")
    }

   
    render() {
        return (
            <StatusBar backgroundColor='black'/>,
            <Container>
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.navigateToSub}>
                            <Ionicons name = "reorder-four-outline" 
                                size = {30}
                                style = {{color:"#303D74"}}/>
                        </Button>
                    </Left>
                    <Item style={styles.search}>
                        <Ionicons name="search-outline" style={{marginLeft: 10}}></Ionicons>
                        <Input style={{marginLeft: 3}} placeholder="검색"/>
                    </Item>
                </Header>
                <View style={styles.content}>
                    <FlatList data = {DATA} renderItem={({item}) => <BookItem BookName={item.title} ClassName={item.className} price={item.price} img={item.img} phone={item.phone}/>} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: 'white',
    },
    search:{
        flex: 2,
        marginRight: 10,
        backgroundColor: "#ededed"
    },
    content: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      }
});