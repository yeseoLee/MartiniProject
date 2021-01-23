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
     title: '소프트웨어 교육론',
     className:'소프트웨어의 원리와 이해',
     price: '10,000',
     img: require('./Like/bookImg.jpg'),
     phone: '01066285506',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: '10,000',
     img: require('./Profile/images/c.png'),
     phone: '01090655436',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '알고리즘',
     className:'알고리즘 및 실습',
     price: '10,000',
     img: require('./Profile/images/algo.png'),
     phone: '01046785984',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '통계학개론',
     className:'통계학개론',
     price: '10,000',
     img: require('./Profile/images/statistic.png'),
     phone: '01057499394',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '10,000',
     img: require('./Profile/images/toeic.png'),
     phone: '01041793445',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '미분적분학',
     className:'일변수 미적분학',
     price: '10,000',
     img: require('./Profile/images/image2.png'),
     phone: '01066176371',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
];

export default class HomeTab extends React.Component{
    constructor() {
        super();
    }
    
    static navigationOptions = {
        // tabBarIcon: ({tintColor}) => (
        //     <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        // )
        drawerLabel:'전체'
    }

    navigateToSub = () => {
        // this.props.navigation.navigate('Sub');
        this.props.navigation.openDrawer();
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
                        {/* <Button transparent onPress={this.navigateToSub}> */}
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
                    <FlatList data = {DATA} renderItem={({item}) => <BookItem BookName={item.title} ClassName={item.className} price={item.price} img={item.img} phone={item.phone}publisher={item.publisher}
                         bookCondition = {item.bookCondition}/>} />
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
        marginTop:10,
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      }
});