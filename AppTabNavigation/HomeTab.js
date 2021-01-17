import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert,TouchableOpacity,TouchableHighlight,ScrollView,Image} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, 
        Button, Left, Right, Body, Icon, Item, Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as SMS from 'expo-sms';
// import uuid from 'react-uuid';

const brandPrimary = 'white'

export default class HomeTab extends React.Component{
    
    state = {
        key:'',
        text:'practice',
    };

    addFavoriteBook = () => {
        this.setState({
            key: uuid()
        })
    }

    navigateToSub = () => {
        this.props.navigation.navigate('Sub');
      }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        )
    }

    navigateToSub = () => {
        this.props.navigation.navigate('Sub');
      }

      constructor() {
        super();
    }

    getSMS = async() => {
        try{
          await SMS.isAvailableAsync();
          SMS.sendSMSAsync(['01040941308'], '군-바');
        }catch(error){
          Alert.alert("SMS 기능 사용 불가", "ㅠ-ㅠ");
        }
    };

    alertDelete = () => {
        Alert.alert("관심목록", "추가되었습니다")
    }

   



    render() {
        return (
            <StatusBar backgroundColor='black'/>,
            <Container>
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.navigateToSub}>
                            <Ionicons name = "reorder-four-outline" 
                                size = {30}
                                style = {{color:"#303D74"}}/>
                        </Button>
                    </Left>
                    <Item style={styles.search}>
                        <Ionicons name="search-outline" style={{marginLeft: 10}}></Ionicons>
                        <Input style={{marginLeft: 3}} placeholder="검색"/>
                    </Item>
                </Header>
        <View style={styles.content}>
            <ScrollView>
            <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/c.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>실전 C프로그래밍</Text>
                    <Text style={styles.bookDescribe3}>고급 C프로그래밍</Text>
                    <Text style={styles.bookDescribe3}>12,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableHighlight>
                    <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete} underlayColor="red"/>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  underlayColor="red" size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/image2.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>미분적분학1</Text>
                    <Text style={styles.bookDescribe3}>일변수 미적분학</Text>
                    <Text style={styles.bookDescribe3}>18,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/algo.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>알고리즘 원리와 응용</Text>
                    <Text style={styles.bookDescribe3}>알고리즘 및 실습</Text>
                    <Text style={styles.bookDescribe3}>13,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/toeic.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>해커스 토익 RC</Text>
                    <Text style={styles.bookDescribe3}>토익</Text>
                    <Text style={styles.bookDescribe3}>9,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/statistic.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>통계학개론 제 3판</Text>
                    <Text style={styles.bookDescribe3}>통계학개론</Text>
                    <Text style={styles.bookDescribe3}>17,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/c.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>실전 C프로그래밍</Text>
                    <Text style={styles.bookDescribe3}>고급 C프로그래밍</Text>
                    <Text style={styles.bookDescribe3}>12,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/image2.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>미분적분학1</Text>
                    <Text style={styles.bookDescribe3}>일변수 미적분학</Text>
                    <Text style={styles.bookDescribe3}>18,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/algo.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>알고리즘 원리와 응용</Text>
                    <Text style={styles.bookDescribe3}>알고리즘 및 실습</Text>
                    <Text style={styles.bookDescribe3}>13,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart-outline' size = {30} onPress={this.alertDelete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline' size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/toeic.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>해커스 토익 RC</Text>
                    <Text style={styles.bookDescribe3}>토익</Text>
                    <Text style={styles.bookDescribe3}>9,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity onPress={this.alertDelete}>
                        <Ionicons name = 'heart' size = {30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.ItemStyle}>
                <Image style={styles.bookImage} source={require("./Profile/images/statistic.png")} />
                <View style={styles.bookDescribe}>
                    <Text style={styles.bookDescribe2}>통계학개론 제 3판</Text>
                    <Text style={styles.bookDescribe3}>통계학개론</Text>
                    <Text style={styles.bookDescribe3}>17,000 원</Text>
                </View>
                <View style={justifyContent='space-around'}>
                    <TouchableOpacity>
                        <Ionicons name = 'heart' size = {30} onPress={this.alertDelete} color='#F15F5F'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getSMS}>
                        <Ionicons name = 'chatbubble-ellipses-outline'  size = {30}/>
                    </TouchableOpacity>
                </View>
           </View>
            </ScrollView>
          </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: 'white',
    },
    search:{
        flex: 2,
        marginRight: 10,
        backgroundColor: "#ededed"
    },
    content: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'blue',
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
        borderBottomColor:'lightgrey',
        borderBottomWidth:2,
        borderColor:'black'
      },
      bookcontent:{
          flexDirection:'column',
          marginBottom:30,
        margin:15
      },
      image:{
          backgroundColor:'blue',
        borderWidth:0.5,
        borderColor:'black',
        margin:15,
        width:80,
        height:120,
      },
      booktitle:{
          fontSize:20,
          marginBottom:20,
    
      },
      bookdetail:{
          marginBottom:10,
          fontStyle:'italic',
        
      },
      ItemStyle:{
        marginBottom:0,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin:5,
        paddingLeft: 15,
        paddingRight: 15
    },    
    bookImage:{
        width: 90,
        marginBottom:5,
        height:120,
    },
    bookDescribe:{
        width:200,
        flexDirection:'column',
        fontSize: 20
    },
    bookDescribe2:{
        fontSize: 20,
        marginBottom:10
    },
    bookDescribe3:{
        fontSize: 15,
        marginBottom:3
    },
});