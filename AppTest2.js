/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,PixelRatio,Button} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'

 class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.flex}>
          <Text style={{fontSize:20}}>首页</Text>
          <Button 
            title='Goto Detail'
            onPress={()=>this.props.navigation.navigate('Details')}
          />


        </View>
      
    );
  }
}

class DetailsScreen extends Component{
  render() {
    return (
      <View style={[styles.flex,{backgroundColor:'rgb(24,234,234)'}]}>
        <Text style={{fontSize:20}}>详情</Text>
        <Button
          title='Go to Details... again'
          onPress={()=>this.props.navigation.push('Details')}
        />
        <Button
          title='Go to home'
          onPress={()=>this.props.navigation.push('Home')}
        />
        <Button
          title='Go to back'
          onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      title:'首页',
    }

  },
  Details:{
    screen:DetailsScreen,
    navigationOptions:{
      title:'详情页',
    }
  },

  },
  {
    initialRouteName:'Home',
  }
);
const Appcontainer =createAppContainer(RootStack);

export default class AppTest2 extends Component {
  render() {
    return (
      <Appcontainer/>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(234,234,234)',
  },
  container:{
    marginTop:0,
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
