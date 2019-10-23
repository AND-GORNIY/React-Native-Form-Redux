import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

class Component2 extends React.Component {
  state = {
    update: false,
    timerID: undefined,
    startAt: undefined,
  };

  startTimer = () => {
    const timerID = setTimeout(() => {
      this.setState({
        update: false,
        startAt: undefined,
      });
    }, 5000);

    this.setState({
      update: true,
      timerID,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }
    if (!this.state.update) {
      return this.startTimer();
    }
    clearTimeout(this.state.timerID);
    this.startTimer();
  }

  render() {
    const {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
      cardType,
      isloading,
    } = this.props;
    const {update} = this.state;
    if (update && validationResult && !isloading) {
      return (
        <View style={styles.textDirect}>
          <Text style={styles.textStyle}>
            {' '}
            Card info: ************{cardNumber.substr(12, 4)}
          </Text>
          <Text style={styles.textStyle}> Name: {firstName} </Text>
          <Text style={styles.textStyle}> Surname: {lastName}</Text>
          <Text style={styles.textStyle}> CardType: {cardType}</Text>
        </View>
      );
    }

    if (
      update &&
      !isloading &&
      (cardNumber || expirationDate || cvv || firstName || lastName || cardType)
    ) {
      return (
        <View style={styles.textDirect}>
          <Text style={styles.textStyle}> Error </Text>
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  textDirect: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  textStyle: {
    fontSize: 25,
  },
});

const mapStateToProps = store => {
  return {
    cardNumber: store.userInfo.cardNumber,
    expirationDate: store.userInfo.expirationDate,
    cvv: store.userInfo.cvv,
    firstName: store.userInfo.firstName,
    lastName: store.userInfo.lastName,
    validationResult: store.userInfo.validationResult,
    isloading: store.userInfo.isloading,
    cardType: store.userInfo.cardType,
  };
};

const Component2Container = connect(mapStateToProps)(Component2);

export default Component2Container;
