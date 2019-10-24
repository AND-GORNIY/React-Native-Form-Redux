import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Component1 from '../Component1';
import Component2 from '../Component2';
// import Component4 from '../Cmponent4';

class FormApp extends Component {
  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <Component1 />
        <Component2 />
        {/* <Component4 /> */}
      </ScrollView>
    );
  }
}
export default FormApp;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#4fc3f7',
  },
});
