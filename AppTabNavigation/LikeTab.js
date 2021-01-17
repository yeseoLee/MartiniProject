import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Container, Header} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';

import FavoriteBook from './Like/FavoriteBook';

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '소프트웨어 교육론',
     className:'소프트웨어의 원리와 이해',
     price: '10,000',
     img: require('./Like/bookImg.jpg'),
     phone: '01066285506'
    },
    {key:  uuid(),
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: '10,000',
     img: require('./Profile/images/c.png'),
     phone: '01090655436'
    },
    {key:  uuid(),
     title: '알고리즘',
     className:'알고리즘 및 실습',
     price: '10,000',
     img: require('./Profile/images/algo.png'),
     phone: '01046785984'
    },
    {key:  uuid(),
     title: '통계학개론',
     className:'통계학개론',
     price: '10,000',
     img: require('./Profile/images/statistic.png'),
     phone: '01057499394'
    },
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '10,000',
     img: require('./Profile/images/toeic.png'),
     phone: '01041793445'
    },
    {key:  uuid(),
     title: '미분적분학',
     className:'일변수 미적분학',
     price: '10,000',
     img: require('./Profile/images/image2.png'),
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
                    <FlatList data = {DATA}
                         renderItem={({item}) => <FavoriteBook name={item.title} className={item.className} price={item.price} img={item.img} phone={item.phone}/>} />
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
        borderEndColor: 'lightgray',
          shadowOpacity: 0.5,
    },
    headerTextStyle:{
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
    },
    bodyContainer:{
        height:'93%',
    },
});