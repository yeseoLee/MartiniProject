import React from 'react';
import {View, Text, StyleSheet,Image,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ProfileTab extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'person' size = {30} style = {{color:tintColor}}/>
        )
    }
    
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.user}>
            <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 100}}>
                <View style={{width: 100, height: 100}} >
                  <Image source={require('./images/avatar.png')} style={{width: 100, height: 100}}/>
                </View>
              </View>
              <View style={{flex: 1, marginLeft: 10}}>
                <Text style={{fontSize: 30}}>닉네임</Text>
                <Text style={{color: 'gray', fontSize: 15}}>이름 / ID</Text>
                <Text style={{color: 'gray', fontSize: 15}}>학교이름</Text>
              </View>
            </View>
            <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./images/list.png')} style={{width: 30, height: 25}}/>
                <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
              </View>
            </View>
          </View>
            <View style={styles.content}>
              <ScrollView>
                <View style={styles.whatbook}>
                  <View>
                  <Image style={styles.image}
                  source={require('./images/c.png')}/>
                  </View>
                  <View style={styles.bookcontent}>
                  <Text>C프로그래밍</Text>
                  </View>
                </View>
                <View style={styles.whatbook}>
                  <View>
                    <Image style={styles.image}
                    source={require('./images/image2.png')}/>
                  </View>
                  <View style={styles.bookcontent}>
                    <Text>미분적분학</Text>
                    </View>
                </View>
                <View style={styles.whatbook}>
                  <View>
                    <Image style={styles.image}
                    source={require('./images/image2.png')}/>
                  </View>
                  <View style={styles.bookcontent}>
                    <Text>미분적분학</Text>
                    </View>
                </View>
              </ScrollView>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    flexDirection: 'row',
    width:'100%',
    height:'18%',
    alignItems:'center'
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
  booK:{
    borderWidth:0.5,
    borderColor:'black',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10
  },
  whatbook:{
    margin:1,
    flexDirection:'row',
    borderWidth:0.5,
    borderColor:'black'
  },
  bookcontent:{
    margin:15
  },
  image:{
    borderWidth:0.5,
    borderColor:'black',
    margin:15,
    width:100,
    height:150,
  },
  user:{
    margin:15
  }
})