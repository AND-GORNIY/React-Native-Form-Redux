export const SET_USER_DATA = 'SET_USER_DATA';
export function set_data(userInfo) {
  return {
    type: SET_USER_DATA,
    payload: userInfo,
  };
}
