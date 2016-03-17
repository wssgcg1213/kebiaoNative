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

const imgUrl = 'http://cet.redrock-team.com/static/img/banner.png';

class kebiaoNative extends Component {
  constructor () {
    super();
    this.state = {
      items: []
    };
  }

  async componentDidMount () {
    const rep = await fetch('http://hongyan.cqupt.edu.cn/api/kebiao', {
      method: 'POST',
      body: 'stuNum=2013211854'
    });
    const kb = await rep.json();
    console.log(kb);
    const nowWeek = kb.nowWeek;
    const items = Array.from(new Array(42)).map((v, key) => ({ key }));
    console.log(items);
    if (!Array.isArray(kb.data)) {
      return;
    }
    for (let obj of kb.data) {
      items[obj.hash_day + obj.hash_lesson * 7] = {
        key: items[obj.hash_day + obj.hash_lesson * 7].key,
        ...obj
      };
    }
    this.setState({ items });
  }

  render () {
    return (
      <View>
        <Top week={3}/>
        <GridView
          items={this.state.items}
          itemsPerRow={7}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem (item) {
    console.log(item);
    return <Course key={item.key} data={item}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('kebiaoNative', () => kebiaoNative);
