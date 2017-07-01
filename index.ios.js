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


export default class rntutorial extends Component {
    render(){
        return(
          <View>
               <Text style={styles.red}>just red</Text>
               <Text style={styles.bigblue}>just bigblue</Text>
               <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
               <Text style={[styles.red, styels.bigblue]}>red, then bigblue</Text>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
                                
})

AppRegistry.registerComponent('rntutorial', () => rntutorial);
