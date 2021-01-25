import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeTab';
import MajorScreen from './Category/MajorScreen';
import NonMajorScreen from './Category/NonMajorScreen';
import EtcScreen from './Category/EtcScreen';
import SideBar from './Category/SideBar';


const AppHomeNavigator = createDrawerNavigator({
    Home:{screen:HomeScreen},
    Major:{screen:MajorScreen},
    NonMajor:{screen:NonMajorScreen},
    Etc:{screen:EtcScreen}
},{
    contentComponent: (props) => <SideBar {...props}/>
});


export default class HomeTabMain extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        )
    }
    static router=AppHomeNavigator.router;

    render() {
        return(
            <AppHomeNavigator navigation={this.props.navigation} />
        )
    }
}

