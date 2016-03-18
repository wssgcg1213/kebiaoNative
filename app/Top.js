'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Top extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <View style={styles.topContainer}>
        <Text style={styles.nowWeek}>{`第 ${this.props.nowWeek} 周`}</Text>
        <View style={styles.weekIndicator}>
          <Text style={styles.weeks}>周一</Text>
          <Text style={styles.weeks}>周二</Text>
          <Text style={styles.weeks}>周三</Text>
          <Text style={styles.weeks}>周四</Text>
          <Text style={styles.weeks}>周五</Text>
          <Text style={styles.weeks}>周六</Text>
          <Text style={styles.weeks}>周日</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 15, // status bar
    backgroundColor: '#78BEA6',
    height: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nowWeek: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  weekIndicator: {
    flexDirection: 'row',
    width: 380,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  weeks: {
    color: '#CCD39E',
    lineHeight: 30
  }
});
