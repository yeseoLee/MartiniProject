import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
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
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Ionicons name = "reorder-four-outline" 
                                size = {30}
                                style = {{color:"#303D74"}}/>
                        </Button>
                    </Left>
                    <Body>
                        
                    </Body>
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
    }
});