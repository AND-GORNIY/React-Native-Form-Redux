import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';

const initialState = {
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  firstName: '',
  lastName: '',
  validationResult: false,
  validationFields: {
    cardNumberValid: true,
    expirationDateValid: true,
    cvvValid: true,
    firstNameValid: true,
    lastNameValid: true,
  },
  editableForm: true,
  disabledButtom: false,
  animateSpiner: false,
};

export const reducerInfo = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        ...action.payload,
        animateSpiner: true,
        editableForm: false,
        disabledButtom: true,
      };
    default:
      return state;
  }
};
