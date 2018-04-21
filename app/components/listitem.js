import React, { Component } from 'react';

import {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Button
} from 'react-native';



import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
 
class MyListItem extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        //  this.props.getData(); //call our action
        this.props.showData();
    }
    render() {
      
      return (
       
        <View style={styles.container}>
        <Button
        title="Go to Form"
        onPress={() =>
            this.props.navigation.navigate('MyForm', { name: 'Jane' })
        }/>

        <FlatList
          data={this.props.data}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View>
       
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     backgroundColor:"black", 
      
     flex: 1,
     paddingTop: 22
    },
    item: {
      color:"white",   
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

  function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
   }

   export default connect(mapStateToProps, mapDispatchToProps)(MyListItem);