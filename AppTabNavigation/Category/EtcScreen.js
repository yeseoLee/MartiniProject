import React from 'react';
import uuid from 'react-uuid';

import ScreenComponent from "./ScreenComponent";

const DATA = [    
    
    {key:  uuid(),
     title: '해커스 토익 RC',
     className:'토익',
     price: '10,000',
     img: require('../Profile/images/toeic.png'),
     phone: '01041793445',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
];


export default class EtcScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '기타'
    };

    navigateToDrawer = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return(
            <ScreenComponent DATA = {DATA} navigateToDrawer={this.navigateToDrawer}/>
        )
    }
}