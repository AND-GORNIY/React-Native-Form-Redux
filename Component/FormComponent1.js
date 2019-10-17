import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormComponent3 from './FormComponent3';

class FormComponent1 extends Component {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    validationResult: undefined,
    validationFields: {
      cardNumberValid: true,
      expirationDateValid: true,
      cvvValid: true,
      firstNameValid: true,
      lastNameValid: true,
    },
  };

  validateField = () => {
    const {cardNumber, expirationDate, cvv, firstName, lastName} = this.state;
    let cardNumberValid,
      expirationDateValid,
      cvvValid,
      firstNameValid,
      lastNameValid,
      resultValid;

    const checkDate = val => {
      if (
        !isNaN(val.slice(0, 2)) &&
        +val.slice(0, 2) < 13 &&
        !isNaN(val.substr(3, 2)) &&
        val.length === 5
      ) {
        return true;
      } else {
        return false;
      }
    };

    cardNumberValid = cardNumber.length === 16 ? true : false;
    expirationDateValid = checkDate(expirationDate);
    cvvValid = cvv.length > 2 && cvv.length < 5 ? true : false;
    firstNameValid = firstName.length > 3 ? true : false;
    lastNameValid = lastName.length > 3 ? true : false;

    resultValid =
      cardNumberValid &&
      expirationDateValid &&
      cvvValid &&
      firstNameValid &&
      lastNameValid;

    this.setState(
      {
        validationFields: {
          cardNumberValid: cardNumberValid,
          expirationDateValid: expirationDateValid,
          cvvValid: cvvValid,
          firstNameValid: firstNameValid,
          lastNameValid: lastNameValid,
        },
        validationResult: resultValid,
      },
      this.passData,
    );
  };

  passData = () => {
    const {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
    } = this.state;

    this.props.setDataApp(
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
    );
  };

  render() {
    const {
      cardNumberValid,
      expirationDateValid,
      cvvValid,
      firstNameValid,
      lastNameValid,
    } = this.state.validationFields;
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
        />

        <TouchableOpacity style={styles.button} onPress={this.validateField}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        <FormComponent3
          setCardType={this.props.setCardType}
          cardNumber={this.props.cardNumber}
        />
      </SafeAreaView>
    );
  }
}

export default FormComponent1;

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
});
