import React from 'react';
import {View, Text} from 'react-native';

export default class MajorScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '전공'
    };

    render() {
        return(
            <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text>전공</Text>
            </View>
        )
    }
}