/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
 
import store from './app/store'; //Import the store

import Home from './app/components/home' //Import the component file;
import MyListItem from './app/components/listitem';
import MyForm from './app/components/form';
import Album from './app/components/album';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const NavApp = StackNavigator({
  Home: {screen: Home },
  MyListItem: { screen: MyListItem },
  Album: {screen: Album},
  MyForm:{screen:MyForm}
 },{
  headerMode: 'none'
  });

export default class App extends Component {
  render() {
    return (  
           <Provider store={store}>
            <NavApp  />  
            </Provider>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
