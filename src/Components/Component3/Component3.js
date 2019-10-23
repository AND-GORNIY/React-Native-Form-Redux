import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {setCardType} from '../../actions/setCardType';
import {checkCardType} from '../../services/checkCardType';

class Component3 extends React.PureComponent {
  render() {
    const {cardNumber, setCardType} = this.props;
    if (cardNumber !== undefined && cardNumber !== '') {
      const type = checkCardType(cardNumber);
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
