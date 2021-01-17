import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,Alert,TouchableOpacity,Switch} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, ThemeColors} from 'react-navigation';
import * as MailComposer from 'expo-mail-composer';
import uuid from 'react-uuid'

export default class BookScreen extends React.Component{
    state={
        seg: 1,
    }
    render(){
        return(
            <View style={styles.whatbook}>
                <View>
                    <Image style={styles.image}
                    source={this.props.img}/>
                </View>
                <View style={styles.bookcontent}>
                    <Text>{this.props.name}</Text>
                    <Segment style={{backgroundColor: "white"}}>
                        <Button style={{
									backgroundColor: this.state.seg === 1 ? "#303D74" : 'white',
									borderColor: "#303D74",
								}}
								first
								active={this.state.seg === 1 ? true : false}
								onPress={() => this.setState({ seg: 1 })}>
                            <Text style={{ color: this.state.seg === 1 ? "white" : "#303D74" }}>판매중</Text>
                        </Button>
                        <Button last
								style={{
									backgroundColor: this.state.seg === 2 ? "#303D74" : 'white',
									borderColor: "#303D74",
								}}
								active={this.state.seg === 2 ? true : false}
								onPress={() => this.setState({ seg: 2 })}>
                            <Text style={{ color: this.state.seg === 1 ? "#303D74" : "white" }}>판매완료</Text>
                        </Button>
                    </Segment> 
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    image:{
        borderWidth:0.5,
        borderColor:'black',
        margin:15,
        width:100,
        height:150,
      },
      bookcontent:{
        margin:15
      },
      whatbook:{
        margin:1,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'black'
      },
})