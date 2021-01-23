import React from 'react';
import uuid from 'react-uuid';

import ScreenComponent from "./ScreenComponent";

const DATA = [    
    {key:  uuid(),
     title: '통계학개론',
     className:'통계학개론',
     price: '10,000',
     img: require('../Profile/images/statistic.png'),
     phone: '01057499394',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
    {key:  uuid(),
     title: '미분적분학',
     className:'일변수 미적분학',
     price: '10,000',
     img: require('../Profile/images/image2.png'),
     phone: '01066176371',
     publisher: '세종출판사',
     bookCondition: '양호'
    },
];

export default class NonMajorScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '비전공'
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