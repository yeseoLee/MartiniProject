import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';

import FavoriteBook from './Like/FavoriteBook';

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '현대차',
     img: './Like/bookImg.jpg'
    },
    {key:  uuid(),
     title: '삼성전자',
     img: './Profile\images/c.png'
    },
    {key:  uuid(),
     title: '성적과함께사라지다',
     img: './Like/bookImg.jpg'
    },
    {key:  uuid(),
     title: '삼성바이오로직스',
     img: './Like/bookImg.jpg'
    },
    {key:  uuid(),
     title: '테슬라',
     img: './Like/bookImg.jpg'
    },
    {key:  uuid(),
     title: '대한항공',
     img: './Like/bookImg.jpg'
    },
];

export default class LikeTab extends React.Component{
    
    
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'heart-outline' size = {26} style = {{color:tintColor}} color = "red"/>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextStyle}>관심목록</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <FlatList data = {DATA}
                         renderItem={({item}) => <FavoriteBook name={item.title}/>} />
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
    headerContainer: {
        height:'10%',
        backgroundColor:'white',
        justifyContent: 'center',
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderEndColor: 'black'
    },
    headerTextStyle:{
        fontSize: 30,
        fontWeight: '100',
        color: 'black',
    },
    bodyContainer:{
        height:'90%',
    },
});