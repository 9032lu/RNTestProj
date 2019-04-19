/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,PixelRatio} from 'react-native';
import { red } from 'ansi-colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  render() {
    return (
        <View style={styles.flex}>
          <View style={styles.container}>
            <View style={[styles.item,styles.center]}>
              <Text style={styles.font}>酒店</Text>
            </View>
            <View style={[styles.item,styles.lineLeftRigth]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={styles.font}>海外酒店</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>特惠酒店</Text>
              </View>
            </View>
            <View style={[styles.item]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.center,styles.flex]}>
                  <Text style={styles.font}>客栈，公寓</Text>
                </View>
              </View>

          </View>

        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
    // backgroundColor:'rgb(234,234,234)',
  },
  container:{
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#ff0067',
  },
  item:{
    flex:1,
    height:80,
  },
  font:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },
  center:{
    justifyContent:'center',
    alignItems:'center',

  },
  color1:{
    // backgroundColor:'black',

  },
  color2:{
    // backgroundColor:'blue',

  },
  color3:{
    // backgroundColor:'yellow',

  },
  lineLeftRigth:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#fff',

  },
  lineCenter:{
    borderBottomWidth:1,
    borderColor:'white',
  }
});
