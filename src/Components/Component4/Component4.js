import React,{Component} from 'react';
import {StyleSheet, Picker} from 'react-native';

class Componet4 extends Component {
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}
export default Componet4;

const styles = StyleSheet.create({});
