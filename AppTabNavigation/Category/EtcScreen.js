import React from 'react';
import {View, Text} from 'react-native';

export default class EtcScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '기타'
    };

    render() {
        return(
            <View style = {{flex: 1, alignItems:"center", justifyContent:"center"}}>
                <Text>기타</Text>
            </View>
        )
    }
}