import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';

import FavoriteBook from './Like/FavoriteBook';

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '현대차',
     img: require('./Like/bookImg.jpg'),
     phone: '01066285506'
    },
    {key:  uuid(),
     title: '삼성전자',
     img: require('./Profile/images/c.png'),
     phone: '01090655436'
    },
    {key:  uuid(),
     title: '성적과함께사라지다',
     img: require('./Profile/images/chat.png'),
     phone: '01046785984'
    },
    {key:  uuid(),
     title: '삼성바이오로직스',
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '테슬라',
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '대한항공',
     img: require('./Profile/images/avatar.png'),
     phone: '01066176371'
    },
    {key:  uuid(),
     title: '신풍제약',
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '한화에어로스페이스',
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '삼성물산',
     img: require('./Profile/images/avatar.png'),
     phone: '01066176371'
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
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextStyle}>관심목록</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <FlatList data = {DATA}
                         renderItem={({item}) => <FavoriteBook name={item.title} img={item.img} phone={item.phone}/>} />
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