export const checkCardType = cardNumber => {
  let lastFourSymbol = Number(cardNumber.substr(12, 4));
  let type;
  if (lastFourSymbol < 2000) {
    type = 'VISA';
  } else {
    type = 'MASTERCARD';
  }
  return type;
};
// export default checkCardType;
