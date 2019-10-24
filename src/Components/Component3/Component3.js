import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {setCardType} from '../../actions/setCardType';

class Component3 extends React.PureComponent {
  checkCardType = cardNumber => {
    let lastFourSymbol = Number(cardNumber.substr(12, 4));
    let type;
    if (lastFourSymbol < 2000) {
      type = 'VISA';
    } else {
      type = 'MASTERCARD';
    }
    return type;
  };

  render() {
    const {cardNumber, setCardType} = this.props;
    if (cardNumber !== undefined && cardNumber !== '') {
      const type = this.checkCardType(cardNumber);
      setCardType(type);
      return <Text>{type}</Text>;
    }
    return null;
  }
}

const mapStateToProps = store => {
  return {
    cardNumber: store.userInfo.cardNumber,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    setCardType: type => dispatch(setCardType(type)),
  };
};

const Component3Container = connect(
  mapStateToProps,
  mapDispatchToprops,
)(Component3);

export default Component3Container;
