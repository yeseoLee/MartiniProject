import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Container, Header} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';

import FavoriteBook from './Like/FavoriteBook';

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '현대차',
     className:'전기차',
     price: 10000,
     img: require('./Like/bookImg.jpg'),
     phone: '01066285506'
    },
    {key:  uuid(),
     title: '삼성전자',
     className:'반도체',
     price: 10000,
     img: require('./Profile/images/c.png'),
     phone: '01090655436'
    },
    {key:  uuid(),
     title: '성적과함께사라지다',
     className:'기말고사 끝났음',
     price: 10000,
     img: require('./Profile/images/chat.png'),
     phone: '01046785984'
    },
    {key:  uuid(),
     title: '삼성바이오로직스',
     className:'제약/바이오',
     price: 10000,
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '테슬라',
     className:'전기차',
     price: 10000,
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '대한항공',
     className:'항공',
     price: 10000,
     img: require('./Profile/images/avatar.png'),
     phone: '01066176371'
    },
    {key:  uuid(),
     title: '신풍제약',
     className:'제약/바이오',
     price: 10000,
     img: require('./Profile/images/list.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '한화에어로스페이스',
     className:'항공우주',
     price: 10000,
     img: require('./Profile/images/sadfrog.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '삼성물산',
     className:'물류/교통',
     price: 10000,
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
                {/* <Container>
                    <Header>
                        <Text style={styles.headerTextStyle}>관심목록</Text>
                    </Header>
                </Container> */}
                
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextStyle}>관심목록</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <FlatList data = {DATA} renderItem={({item}) => <FavoriteBook name={item.title} className={item.className} price={item.price} img={item.img} phone={item.phone}/>} />
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
        height:'7%',
        backgroundColor:'white',
        justifyContent: 'center',
        paddingLeft: 20,
        borderBottomWidth: 0.5,
        borderEndColor: 'lightgray'
    },
    headerTextStyle:{
        fontSize: 15,
        fontWeight: '100',
        color: 'black',
    },
    bodyContainer:{
        height:'93%',
    },
});