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

import Gambar from './src/component/Gambar';
import Info from './src/component/Info';
import Connect from './src/component/Connect';
import Record from './src/component/Record';
import Stop from './src/component/StopRecord';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render(){
      return(
        <View style={styles.container} >
          <Gambar/>
          <Info
            style={styles.info}
          />
          <Connect/>
          <Record/>
          <Stop/>
        </View>
      );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbc531',
  },
  info:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'25%'
  }
});
