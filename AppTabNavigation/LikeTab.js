import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, 
    Button, Left, Item, Input, Body} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';

import FavoriteBook from './Like/FavoriteBook';
import { color } from 'react-native-reanimated';

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '소프트웨어 교육론',
     className:'소프트웨어의 원리와 이해',
     price: '10,000',
     img: require('./Like/bookImg.jpg'),
     phone: '01066285506',
     publisher: '세종출판사',
     bookCondition: '보밍밍밍 짱짱짱 배고프지만 먹지않겠어. 저녁은 바나나 블루베리 쉐이크. 헬스장 빨리 갔다가 집 와서 학원일 해야지 히히^_^',
     category:'전공'
    },
    {key:  uuid(),
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: '10,000',
     img: require('./Profile/images/c.png'),
     phone: '01090655436',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '알고리즘',
     className:'알고리즘 및 실습',
     price: '10,000',
     img: require('./Profile/images/algo.png'),
     phone: '01046785984',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '통계학개론',
     className:'통계학개론',
     price: '10,000',
     img: require('./Profile/images/statistic.png'),
     phone: '01057499394',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '10,000',
     img: require('./Profile/images/toeic.png'),
     phone: '01041793445',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '미분적분학',
     className:'일변수 미적분학',
     price: '10,000',
     img: require('./Profile/images/image2.png'),
     phone: '01066176371',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
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

export default class LikeTab extends React.Component{
    
    
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'heart-outline' size = {26} style = {{color:tintColor}}/>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header style={styles.header}>
                <Left>
                    <Text style={styles.headertext}>  관심 목록 </Text>
                </Left>
                <Body></Body>
                </Header>
                <View style={styles.bodyContainer}>
                    <FlatList data = {DATA}
                         renderItem={({item}) => <FavoriteBook name={item.title} className={item.className} price={item.price} img={item.img} phone={item.phone} publisher={item.publisher}
                         bookCondition = {item.bookCondition} category={item.category}/>} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },

    headerTextStyle:{
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
    },
    bodyContainer:{
        height:'93%',
    },
    header:{
        backgroundColor:'white',
        alignItems:'flex-start'
    },
    headertext:{
        marginLeft:5,
        color:'gray',
        fontSize:20,
        alignItems:'flex-start'
    }
});