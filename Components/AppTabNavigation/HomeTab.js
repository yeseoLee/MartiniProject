import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
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
            <Ionicons name = 'ios-home' size = {25} style = {{color:tintColor}}/>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text>홈</Text>
                <Button title='관심목록 추가'/>
            </View>

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