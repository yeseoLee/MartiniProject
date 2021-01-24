import React from 'react';
import uuid from 'react-uuid';

import ScreenComponent from "./ScreenComponent";

const DATA = [    
    {key: uuid(),      //각 값마다 고유 key값 부여
     title: '소프트웨어 교육론',
     className:'소프트웨어의 원리와 이해',
     price: '10,000',
     img: require('../Like/bookImg.jpg'),
     phone: '01066285506',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '실전 C프로그래밍',
     className:'고급 C프로그래밍',
     price: '10,000',
     img: require('../Profile/images/c.png'),
     phone: '01090655436',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    },
    {key:  uuid(),
     title: '알고리즘',
     className:'알고리즘 및 실습',
     price: '10,000',
     img: require('../Profile/images/algo.png'),
     phone: '01046785984',
     publisher: '세종출판사',
     bookCondition: '양호',
     category:'전공'
    }
];

export default class MajorScreen extends React.Component{
    static navigationOptions = {
        drawerLabel: '전공'
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