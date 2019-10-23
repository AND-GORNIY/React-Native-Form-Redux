import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
  CHECK_TYPECARD,
} from '../types/types';

const initialState = {
  cardNumber: undefined,
  expirationDate: undefined,
  cvv: undefined,
  firstName: undefined,
  lastName: undefined,
  cardType: undefined,
  validationResult: false,
  validationFields: {
    cardNumberValid: true,
    expirationDateValid: true,
    cvvValid: true,
    firstNameValid: true,
    lastNameValid: true,
  },
  animateSpiner: false,
  editableForm: true,
  disabledButtom: false,
  isloading: false,
};

export const reducerInfo = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        animateSpiner: true,
        editableForm: false,
        disabledButtom: true,
        isloading: true,
      };
    case USER_RESPONSE_SUCC:
      return {
        ...state,
        animateSpiner: false,
        editableForm: true,
        disabledButtom: false,
        isloading: false,
        ...action.payload.data,
        ...action.payload.result,
      };
    case USER_RESPONSE_ERROR:
      return {
        ...state,
        animateSpiner: false,
        editableForm: true,
        disabledButtom: false,
        isloading: false,
        ...action.payload.data,
        ...action.payload.result,
      };
    case CHECK_TYPECARD:
      return {
        ...state,
        cardType: action.payload,
      };
    default:
      return state;
  }
};
