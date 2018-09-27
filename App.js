
import React, { Component } from 'react';
import Main from './app/components/Main';
import Noteview from './app/components/Viewnote';
import {YellowBox } from 'react-native';
import {createStackNavigator} from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const RootNavigation=createStackNavigator(
  {
  Home:Main,
  Noteview:Noteview
  },
  {
    initialRouteName:'Home'
  },
)
export default class App extends Component{
  render() {
    return (
     <RootNavigation />
    );
  }
}
