import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddTab extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'add-outline' size = {26} style = {{color:tintColor}}/>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text>추가탭</Text>
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