import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Component1 from '../Component1';
import Component2 from '../Component2';
import {connect} from 'react-redux';

class FormApp extends Component {
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

    //console.log(this.props);
    return (
      <ScrollView style={styles.ScrollView}>
        <Component1
          setDataApp={this.setDataApp}
          setCardType={this.setCardType}
          cardNumber={cardNumber}
        />
        {/* <Component2
          cardNumber={cardNumber}
          firstName={firstName}
          lastName={lastName}
          validationResult={validationResult}
          cardType={cardType}
          expirationDate={expirationDate}
          cvv={cvv}
        /> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = store => {
  // const {
  //   cardNumber,
  //   expirationDate,
  //   cvv,
  //   firstName,
  //   lastName,
  //   cardType,
  //   validationResult,
  // } = state.FormApp;
  console.log('fffff', store);
  return {
    cardNumber: store.userInfo.cardNumber,
  };
  // expirationDate: expirationDate,
  // cvv: cvv,
  // firstName: firstName,
};

const FormAppContainer = connect(mapStateToProps)(FormApp);

export default FormAppContainer;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#4fc3f7',
  },
});
