import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddTab extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'add-circle-outline' size = {30} style = {{color:'#303D74'}}/> //210114 컬러 변경(아현)
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