import React, { Component } from 'react';

var {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    FlatList
} = require('react-native');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
 
class MyListItem extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

  
    render() {
      
      return (
       
          <View>
            <Text>
              Hello
            </Text>
          </View>
       
      );
    }
  }

  export default MyListItem;