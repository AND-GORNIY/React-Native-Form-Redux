import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';

import {callAPI} from '../services/ServerRequest';

export function submCreditCard(userInfo) {
  return dispatch => {
    dispatch({
      type: USER_REQUEST,
    });

    callAPI(userInfo).then(
      data => {
        // console.log('boom', data);
        dispatch({type: USER_RESPONSE_SUCC, payload: data});
      },
      data => {
        dispatch({type: USER_RESPONSE_ERROR, payload: data});
      },
    );
  };
}
