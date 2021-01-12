import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ProfileTab extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'person' size = {30} style = {{color:tintColor}}/>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text>프로필</Text>
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