const validateField = (
  cardNumber,
  expirationDate,
  cvv,
  firstName,
  lastName,
) => {
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

  return {
    resultValid: resultValid,
    validationFields: {
      cardNumberValid: cardNumberValid,
      expirationDateValid: expirationDateValid,
      cvvValid: cvvValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
    },
  };
};
export default validateField;
