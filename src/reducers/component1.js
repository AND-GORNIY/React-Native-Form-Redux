import {SET_USER_DATA} from '../actions/actSetUserData';

const initialState = {
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
  editableForm: true,
  disabledButtom: false,
};

const component1 = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default component1;
