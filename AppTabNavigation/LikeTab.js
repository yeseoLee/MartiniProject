import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

import FavoriteBook from './Like/FavoriteBook';

const DATA = [    
    {key: 'C프로그래밍',
     title: 'test'
    },
    {key: '알고리즘',
     title: 'test'
    },
    {key: '자료구조',
     title: 'test'
    },
     {key: '데이터분석개론',
      title: 'test'
     },
     {key: '교수님심리분석개론',
      title: 'test'
        },
        {key: '시험기간해부학개론',
      title: 'test'
     },
     {key: 'F그것이궁금하다',
      title: 'test'
     },
     {key: '수업과심리이해',
      title: 'test'
     },
     {key: '서양철학',
      title: 'test'
     }
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
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextStyle}>관심목록</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <FlatList data = {DATA}
                         renderItem={({item}) => <FavoriteBook name={item.key}/>} />
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
        paddingLeft: 10
    },
    headerTextStyle:{
        fontSize: 30,
        fontWeight: '100'
    },
    bodyContainer:{
        height:'90%',
    },
});