import React from 'react';
import {} from 'react-native';

class Component3 extends React.PureComponent {
  checkCardType = cardNumber => {
    let lastFourSymbol = Number(cardNumber.substr(12, 4));
    let type;
    if (lastFourSymbol < 2000) {
      type = 'VISA';
    } else {
      type = 'MASTERCARD';
    }
    this.props.setCardType(type);
  };

  render() {
    const cardNumber = this.props.cardNumber;
    if (cardNumber !== undefined && cardNumber.length === 16) {
      this.checkCardType(cardNumber);
      return null;
    } else {
      return null;
    }
  }
}
export default Component3;
