import React from 'react';
import {View, StyleSheet, StatusBar, Alert, FlatList} from 'react-native';
import {Container, Header, Button, Left, Body, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';

import BookItem from '../Home/BookItem';

export default class ScreenComponent extends React.Component{
    constructor() {
        super();
    }
    
    alertDelete = () => {
        Alert.alert("관심목록", "추가되었습니다")
    }

    render() {
        return(
            <StatusBar backgroundColor='black'/>,
            <Container>
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.props.navigateToDrawer}>
                            <Ionicons name = "reorder-four-outline" 
                                size = {30}
                                style = {{color:"#303D74"}}/>
                        </Button>
                    </Left>
                    <Body/>
                    {/* 카테고리Bar를 왼쪽에 두기 위한 trick */}
                    <Right/>
                </Header>
                <View style={styles.content}>
                    <FlatList data = {this.props.DATA} renderItem={({item}) =>
                        <BookItem 
                            name={item.title}
                            className={item.className}
                            price={item.price}
                            img={item.img}
                            phone={item.phone}
                            publisher={item.publisher}
                            bookCondition = {item.bookCondition}
                            category={item.category}/>}/>
                </View>
            </Container>           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
      }
});