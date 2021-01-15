import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, 
        Button, Left, Right, Body, Icon, Item, Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
// import uuid from 'react-uuid';

const brandPrimary = 'white'

export default class HomeTab extends React.Component{
    
    state = {
        key:'',
        text:'practice',
    };

    addFavoriteBook = () => {
        this.setState({
            key: uuid()
        })
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        )
    }

    render() {
        return (
            <StatusBar backgroundColor='black'/>,
            <Container>
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => Alert.alert('Left button pressed')}>
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
    }
});