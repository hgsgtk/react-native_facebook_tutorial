/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

class FlexDimensionBasics extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{height: 300 , backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'gray'}} />
        <View style={{flex: 3, backgroundColor: 'orange'}} />
        <View style={{flex: 4, backgroundColor: 'red'}} />

      </View>
    );
  }
}

AppRegistry.registerComponent('rntutorial', () => FlexDimensionBasics);
