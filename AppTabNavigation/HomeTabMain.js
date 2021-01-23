import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeTab';
import MajorScreen from './Category/MajorScreen';
import NonMajorScreen from './Category/NonMajorScreen';
import EtcScreen from './Category/EtcScreen';

const AppHomeNavigator = createDrawerNavigator({
    Home:{screen:HomeScreen},
    Major:{screen:MajorScreen},
    NonMajor:{screen:NonMajorScreen},
    Etc:{screen:EtcScreen}
});

const AppHomeConatainer = createAppContainer(AppHomeNavigator);

export default class HomeTabMain extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Ionicons name = 'ios-home' size = {26} style = {{color:tintColor}}/>
        )
    }

    render() {
        return(
            <AppHomeConatainer />
        )
    }
}

