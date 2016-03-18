'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Course extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <View style={[styles.course, !this.props.data['course'] && styles.nothing]}>
        <Text style={styles.courseName}>{this.props.data['course']}</Text>
        <Text style={styles.courseClass}>{this.props.data['classroom']}</Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  course: {
    height: 100,
    width: 380/7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'hidden',
    padding: 5
  },
  nothing: {
    backgroundColor: '#fff'
  },
  courseName: {
    fontSize: 10,
    flexWrap: 'nowrap',
    marginBottom: 5,
    color: '#957156',
    textAlign: 'center'
  },
  courseClass: {
    fontSize: 10,
    color: '#E86D69',
    textAlign: 'center'
  }
});
