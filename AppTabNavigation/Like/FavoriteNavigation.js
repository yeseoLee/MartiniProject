
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';

import FavBook from './FavoriteBook';
import Book from '../BookTab';  //책 정보 컴포넌트


const AppFavNavigator = createStackNavigator({
    FavBook:{screen:FavBook, params:{name:item.title, className:item.className, price:item.price, img:item.img, phone:item.phone}},
    Book:{screen:Book,  params:{name:item.title, className:item.className, price:item.price, img:item.img, phone:item.phone}}
})

const AppFavContainer = createAppContainer(AppFavNavigator);

export default class FavoriteBook extends React.Component{
       
    render() {
        return <AppFavContainer/>
    }
}