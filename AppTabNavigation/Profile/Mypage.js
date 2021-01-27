import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch,FlatList} from 'react-native';
import{Header,Body,Container}from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import uuid from 'react-uuid'
import BookScreen from'./book';
import UserScreen from './user';

const DATA=[
    {key:uuid(),
      title:'C 프로그래밍',
      className:'C 프로그래밍및실습',
      price:'10,000',
      img:require('./images/c.png'),
      phone:'01040941308',
      publisher:'세종출판사',
      bookCondition:'양호',
    },
    {key:uuid(),
      title:'미분적분학',
      className:'미분적분학',
      price:'10,000',
      img:require('./images/image2.png'),
      phone:'01040941308',
      publisher:'세종출판사',
      bookCondition:'양호',
      },
      {key:uuid(),
        title:'미분적분학',
        className:'미분적분학',
        price:'10,000',
        img:require('./images/image2.png'),
        phone:'01040941308',
        publisher:'세종출판사',
        bookCondition:'양호',
        },
  ]

 export default class MypageScreen extends React.Component{
   
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
          <Ionicons name = 'person' size = {26} style = {{color:tintColor}}/>
      )
    }

    getemail = async() => {
      try{
        await MailComposer.isAvailableAsync();
        MailComposer.composeAsync({
          recipients:['dskminj@naver.com'],
          subject:'데사책방문의',
          body:'문의내용'
        });
      }catch(error){
        Alert.alert("mail 기능 사용 불가", "ㅠ-ㅠ");
      }
    };

    render() {
      return (
        <Container>
          <View style={styles.container}>
            <UserScreen/>
              <View style={{flex:1}}> 
                <FlatList data = {DATA}
                          renderItem={({item}) => <BookScreen name={item.title} className={item.className} price={item.price} img={item.img} phone={item.phone} publisher={item.publisher}
                          bookCondition = {item.bookCondition}/>} 
                          ListHeaderComponent={<Text></Text>}
                          ListFooterComponent={<Text></Text>}/>
              </View>
              <View style={{height: 50, flexDirection: 'row', alignItems: 'center',margin:15}}>
                <View style={{flex: 1, height: 50, flexDirection: 'column', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity>
                    <Ionicons name = 'log-out-outline' size = {26} />
                  </TouchableOpacity>
                  <Text>로그아웃</Text>
                </View>
                <View style={{flex: 1, height: 50, flexDirection: 'column', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                 <TouchableOpacity>
                  <Ionicons name = 'alert-outline' size = {26} onPress={() => this.props.navigation.navigate('이용안내')}/>
                 </TouchableOpacity>
                 <Text>이용안내</Text>
              </View>
              <View style={{flex: 1, height: 50, flexDirection: 'column', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity>
                  <Ionicons name = 'help-outline' size = {26} onPress={this.getemail} />
                </TouchableOpacity>
                <Text>Q&A</Text>
              </View>
            </View>
          </View>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      //backgroundColor:'#303D73',
    },
  })