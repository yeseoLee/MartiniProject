import * as React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, FlatList} from 'react-native';
import {Container}from 'native-base'
import {Ionicons} from '@expo/vector-icons';
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
              <View style={styles.bottombar}>
                <View style={styles.bottomitem}>
                  <TouchableOpacity>
                    <Ionicons name = 'log-out-outline' size = {23} sytle={{alignItems: 'center'}}/>
                    <Text style={{fontSize: 13}, {alignItems: 'center'}}>로그아웃</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomitem} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('이용안내')}>
                    <Ionicons name = 'information-circle-outline' size = {23} sytle={styles.icon}/>
                    <Text style={{fontSize: 13}, {alignItems: 'center'}}>이용안내</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomitem}>
                  <TouchableOpacity>
                    <Ionicons name = 'help-outline'  size = {23} sytle={styles.icon}/>
                    <Text style={{fontSize: 13}, {alignItems: 'center'}}>Q&A</Text>
                  </TouchableOpacity>
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
    },
    bottombar: {
      height: 50, 
      flexDirection: 'row',
      alignItems: 'center',
      borderColor : '#d6d6d6',
      borderWidth: 0.5, 
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    bottomitem:{
      flex: 1,
      height: 40, 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon:{
      alignItems: 'center',
    }
  })