import React from 'react';
import {View, Text} from 'react-native';

export default class NonMajorScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '비전공'
    };

    render() {
        return(
            <View style = {{flex: 1, alignItems:"center", justifyContent:"center"}}>
                <Text>비전공</Text>
            </View>
        )
    }
}