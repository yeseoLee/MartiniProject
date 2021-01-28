import * as React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class UserScreen extends React.Component{
    render(){
        return(
            <View>
              <View style={styles.user}>
                <View style={{height: 130, flexDirection: 'row', alignItems: 'center', marginLeft:15}}>
                  <View style={{width: 100}}>
                      <Image source={require('./images/DS_profile.png')} 
                        style={{width: 80, height: 80, marginLeft: 10}}/>
                  </View>
                  <View style={{marginLeft: 15, justifyContent: 'center'}}>
                      <Text style={{fontSize: 25}}>닉네임</Text>
                      <Text style={{color: 'gray', fontSize: 15}}>이름:</Text>
                      <Text style={{color: 'gray', fontSize: 15}}>학번:</Text>
                  </View>
                </View>
              </View>
              <View style={styles.list}>
                  <Text style={{color: 'white', fontSize: 17}}>판매내역</Text>
              </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  user:{
    backgroundColor:'white',
  },
  list:{
    height: 40,
    alignItems: 'center', 
    backgroundColor: '#303D74',
    justifyContent: 'center',
    flexDirection: 'row',
  }
})
