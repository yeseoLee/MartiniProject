import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Icon, Left, Button} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
// import uuid from 'react-uuid';

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
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Ionicons name = "reorder-four-outline" 
                                size = {30}
                                style = {{color:"#303D74"}}/>
                        </Button>
                    </Left>
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
    }
});