/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import GridView from 'react-native-grid-view';
import Course from './app/Course';
import Top from './app/Top';

class kebiaoNative extends Component {
  constructor () {
    super();
    this.state = {
      items: [],
      nowWeek: 1
    };
  }

  componentDidMount () {
    fetch('http://hongyan.cqupt.edu.cn/api/kebiao', {
      method: 'POST',
      body: 'stuNum=2013211854',
      headers: {
        'Content-Type' : 'application/json;charset=UTF-8'
      }
    }).then(rep => {
      return rep.json();
    }).then(kb => {
      const nowWeek = kb.nowWeek;
      const items = Array.from(new Array(42)).map((v, key) => ({ key }));
      if (!Array.isArray(kb.data)) {
        return;
      }
      for (let obj of kb.data) {
        items[obj.hash_day + obj.hash_lesson * 7] = {
          key: items[obj.hash_day + obj.hash_lesson * 7].key,
          ...obj
        };
      }
      this.setState({ items, nowWeek });
    }).catch(err => {
      console.error(err, 'err!!!');
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Top nowWeek={this.state.nowWeek}/>
        <GridView
          items={this.state.items}
          itemsPerRow={7}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem (item) {
    return <Course key={item.key} data={item}/>;
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

AppRegistry.registerComponent('kebiaoNative', () => kebiaoNative);
