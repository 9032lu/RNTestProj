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
import Header from './AppTest1Header';

export default class App extends Component {
  render() {
    return (
        <View style={styles.flex}>
          <Header/>
          <List title='一线城市楼市退烧 有房源一夜跌价160万'></List>
          <List title='上海市民称墓地太贵买不起 买房存骨灰'></List>
          <List title='朝鲜再发视频:摧毁青瓦台 一切化作灰烬'></List>
          <List title='生活大爆炸人物原型都好牛逼'></List>
          <ImportantNews
              news={[
                '解放军报报社大楼正在拆除 标识已被卸下(图)',
                '韩国停签东三省52家旅行社 或为阻止朝旅游创汇',
                '南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻',
                '防总部署长江防汛:以防御98年量级大洪水为目标'
              ]}/>

         </View>
      
    );
  }
}

class List extends Component{
  render() {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    )
  }
}

class ImportantNews extends Component{
  show(title){
    alert(title);
  }

  render() {
    var news = [];
    for (var i in this.props.news) {
        var text=(
            <Text 
              onPress={this.show.bind(this,this.props.news[i])}
              numberOfLines={2}
              style={styles.news_item}
              key={i}
            > {this.props.news[i]}</Text>
        );
        news.push(text);

    }
    return (
      <View style={styles.flex}>
        <Text style={styles.new_titile}>今日要闻</Text> 
        {news}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  flex:{
    flex:1,
    backgroundColor:'rgb(255,255,255)',
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center',
  },
  list_item_font:{
    fontSize:16,
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:40,
  },
  new_titile:{
    fontSize:20,
    color:'#CD1D1C',
    fontWeight:'bold',
    marginLeft:10,
    marginTop:15,
  }

  
});
