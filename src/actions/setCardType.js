import {CHECK_TYPECARD} from '../types/types';

export const setCardType = cardType => {
  return {
    type: CHECK_TYPECARD,
    payload: cardType,
  };
};
