import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Component3 from '../Component3/Component3';
import {connect} from 'react-redux';
import {submCreditCard} from '../../actions/submCreditCard';

class Component1 extends Component {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
  };

  onSubmit = () => {
    this.props.submCreditCard(this.state);
  };

  render() {
    const {
      cardNumberValid,
      expirationDateValid,
      cvvValid,
      firstNameValid,
      lastNameValid,
    } = this.props.validationFields;
    const {editableForm, disabledButtom, animateSpiner} = this.props;

    return (
      <SafeAreaView style={styles.FormContainer}>
        <Text style={styles.Text}>Card info </Text>

        <Text style={styles.Text}> CARD NUMBER </Text>
        <TextInput
          value={this.state.cardNumber}
          onChangeText={cardNumber => this.setState({cardNumber})}
          style={[
            styles.InputStyleTrue,
            cardNumberValid ? styles.borderStyleTrue : styles.borderStyleError,
          ]}
          maxLength={16}
          placeholder={'****-****-****-****'}
          editable={editableForm}
        />

        <View style={styles.thirdLine}>
          <View style={styles.thirdLineAlign}>
            <Text style={[styles.Text, styles.TextCenter]}> EXP. DATE </Text>
            <TextInput
              value={this.state.expirationDate}
              onChangeText={expirationDate => this.setState({expirationDate})}
              style={[
                styles.InputStyleTrue,
                styles.thirdLineInput,
                expirationDateValid
                  ? styles.borderStyleTrue
                  : styles.borderStyleError,
              ]}
              maxLength={5}
              placeholder={'**/**'}
              editable={editableForm}
            />
          </View>

          <View style={styles.thirdLineAlign}>
            <Text style={styles.Text}> CVV </Text>
            <TextInput
              value={this.state.cvv}
              onChangeText={cvv => this.setState({cvv})}
              style={[
                styles.InputStyleTrue,
                styles.thirdLineInput,
                cvvValid ? styles.borderStyleTrue : styles.borderStyleError,
              ]}
              maxLength={4}
              placeholder={'****'}
              editable={editableForm}
            />
          </View>
        </View>

        <Text style={styles.Text}> NAME </Text>
        <TextInput
          value={this.state.firstName}
          onChangeText={firstName => this.setState({firstName})}
          style={[
            styles.InputStyleTrue,
            firstNameValid ? styles.borderStyleTrue : styles.borderStyleError,
          ]}
          maxLength={16}
          editable={editableForm}
        />

        <Text style={styles.Text}> SURNAME </Text>
        <TextInput
          value={this.state.lastName}
          onChangeText={lastName => this.setState({lastName})}
          style={[
            styles.InputStyleTrue,
            lastNameValid ? styles.borderStyleTrue : styles.borderStyleError,
          ]}
          maxLength={16}
          editable={editableForm}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onSubmit}
          disabled={disabledButtom}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        <ActivityIndicator
          size="large"
          color="#00ff00"
          animating={animateSpiner}
          style={styles.spiner}
        />
        <Component3 />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = store => {
  return {
    validationFields: store.userInfo.validationFields,
    animateSpiner: store.userInfo.animateSpiner,
    editableForm: store.userInfo.editableForm,
    disabledButtom: store.userInfo.disabledButtom,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    submCreditCard: userInfo => dispatch(submCreditCard(userInfo)),
  };
};

const Component1Container = connect(
  mapStateToProps,
  mapDispatchToprops,
)(Component1);

export default Component1Container;

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    alignItems: 'center',
  },
  InputStyleTrue: {
    borderWidth: 2,
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#8bf6ff',
  },
  borderStyleError: {
    borderColor: 'red',
  },
  borderStyleTrue: {
    borderColor: 'black',
  },
  Text: {
    fontSize: 25,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0093c4',
    width: 200,
    height: 65,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
  },
  thirdLine: {
    flex: 1,
    flexDirection: 'row',
  },
  thirdLineInput: {
    width: 150,
  },
  spiner: {
    marginTop: 15,
  },
});
