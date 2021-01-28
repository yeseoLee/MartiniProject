import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import {View, Image, StyleSheet, ScrollView} from 'react-native';

export default class SideBar extends React.Component{
  render() {
    return(
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}> 
          <View style = {{justifyContent:'center', alignItems:'center'}}>
            <Image style = {styles.bookImage} source = {require('../../assets/DS_Logo.png')}/>
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookImage:{
    width: 100,
    height:100,
    marginBottom:20,
  }
});