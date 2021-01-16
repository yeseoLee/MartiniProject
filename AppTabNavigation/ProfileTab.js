import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import{Header,Body,Container,Button}from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import * as MailComposer from 'expo-mail-composer';
class MypageScreen extends React.Component{
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
      <ScrollView style={styles.container}>
          <View style={styles.user}>
          <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 100}}>
              <View style={{width: 100, height: 100}} >
                <Image source={require('./Profile/images/avatar.png')} style={{width: 100, height: 100}}/>
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
              <Image source={require('./Profile/images/list.png')} style={{width: 30, height: 25}}/>
              <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
            </View>
          </View>
        </View>
          <View style={styles.content}>
            <ScrollView>
              <View style={styles.whatbook}>
                <View>
                <Image style={styles.image}
                source={require('./Profile/images/c.png')}/>
                </View>
                <View style={styles.bookcontent}>
                <Text>C프로그래밍</Text>
                </View>
              </View>
              <View style={styles.whatbook}>
                <View>
                  <Image style={styles.image}
                  source={require('./Profile/images/image2.png')}/>
                </View>
                <View style={styles.bookcontent}>
                  <Text>미분적분학</Text>
                  </View>
              </View>
              <View style={styles.whatbook}>
                <View>
                  <Image style={styles.image}
                  source={require('./Profile/images/image2.png')}/>
                </View>
                <View style={styles.bookcontent}>
                  <Text>미분적분학</Text>
                  </View>
              </View>
            </ScrollView>
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
              <Ionicons name = 'alert-outline' size = {26} onPress={() => this.props.navigation.navigate('Qa')}/>
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
      </ScrollView>
      </Container>
    );
  }
}
class NotiScreen extends React.Component{
  render(){
  return(
    <View>
      <Text>이용안내</Text>
    </View>
  );
  }
}
class QaScreen extends React.Component{
  render(){
  return(
    <View>
      <Text>큐앤에이</Text>
    </View>
  );
  }
}

const AppNavigator=createStackNavigator({
  Mypage: {screen:MypageScreen},
  Noti:{screen:NotiScreen},
  Qa: {screen:QaScreen}, 
});
const AppContainer=createAppContainer(AppNavigator);

export default class ProfileTab extends React.Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Ionicons name = 'person' size = {26} style = {{color:tintColor}}/>
    )
  }
    render() {
      return (
        <AppContainer/>
        )
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