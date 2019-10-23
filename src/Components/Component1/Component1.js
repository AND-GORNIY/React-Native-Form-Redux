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
import {set_data} from '../../actions/actSetUserData';

class Component1 extends Component {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    validationResult: undefined,
    // validationFields: {
    //   cardNumberValid: true,
    //   expirationDateValid: true,
    //   cvvValid: true,
    //   firstNameValid: true,
    //   lastNameValid: true,
    // },
    editableForm: true,
    disabledButtom: false,
  };

  onSubmit = () => {
    this.props.setUserData(this.state);
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

    // console.log('!!!!', this.props);

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
        />
        {/* <Component3
          setCardType={this.props.setCardType}
          cardNumber={this.props.cardNumber}
        /> */}
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
    setUserData: userInfo => dispatch(set_data(userInfo)),
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
});

// validateField = () => {
//   const {cardNumber, expirationDate, cvv, firstName, lastName} = this.state;
//   let cardNumberValid,
//     expirationDateValid,
//     cvvValid,
//     firstNameValid,
//     lastNameValid,
//     resultValid;

//   const checkDate = val => {
//     if (
//       !isNaN(val.slice(0, 2)) &&
//       +val.slice(0, 2) < 13 &&
//       !isNaN(val.substr(3, 2)) &&
//       val.length === 5
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   cardNumberValid = cardNumber.length === 16 ? true : false;
//   expirationDateValid = checkDate(expirationDate);
//   cvvValid = cvv.length > 2 && cvv.length < 5 ? true : false;
//   firstNameValid = firstName.length > 3 ? true : false;
//   lastNameValid = lastName.length > 3 ? true : false;

//   resultValid =
//     cardNumberValid &&
//     expirationDateValid &&
//     cvvValid &&
//     firstNameValid &&
//     lastNameValid;
//   this.props.set_data(this.state);

//   this.setState(
//     {
//       validationFields: {
//         cardNumberValid: cardNumberValid,
//         expirationDateValid: expirationDateValid,
//         cvvValid: cvvValid,
//         firstNameValid: firstNameValid,
//         lastNameValid: lastNameValid,
//       },
//       validationResult: resultValid,
//     },
//     this.passData,
//   );
// };

// passData = () => {
//   const {
//     cardNumber,
//     expirationDate,
//     cvv,
//     firstName,
//     lastName,
//     validationResult,
//     // editableForm,
//     // disabledButtom,
//   } = this.state;

//   this.props.setDataApp(
//     cardNumber,
//     expirationDate,
//     cvv,
//     firstName,
//     lastName,
//     validationResult,
//   );
// };
