import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import FormComponent1 from './Component/FormComponent1';
import FormComponent2 from './Component/FormComponent2';

class App extends Component {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    cardType: undefined,
    validationResult: undefined,
  };

  setDataApp = (
    cardNumber,
    expirationDate,
    cvv,
    firstName,
    lastName,
    validationResult,
  ) => {
    this.setState({
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
    });
  };
  setCardType = cardType => {
    this.setState({
      cardType,
    });
  };

  render() {
    const {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
      cardType,
    } = this.state;

    return (
      <ScrollView style={styles.ScrollView}>
        <FormComponent1
          setDataApp={this.setDataApp}
          setCardType={this.setCardType}
          cardNumber={cardNumber}
        />
        <FormComponent2
          cardNumber={cardNumber}
          firstName={firstName}
          lastName={lastName}
          validationResult={validationResult}
          cardType={cardType}
          expirationDate={expirationDate}
          cvv={cvv}
        />
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#4fc3f7',
  },
});
