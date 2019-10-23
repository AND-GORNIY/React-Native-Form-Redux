import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';

import {callAPI} from '../services/ServerRequest';

export function set_data(userInfo) {
  return dispatch => {
    console.log(USER_REQUEST);
    dispatch({
      type: USER_REQUEST,
      // payload: userInfo,
    });

    callAPI(userInfo).then(
      (result, data) => {
        dispatch({type: USER_RESPONSE_SUCC, payload: {result, data}});
      },
      (result, data) => {
        dispatch({type: USER_RESPONSE_ERROR, payload: {result, data}});
      },
    );
  };
}
