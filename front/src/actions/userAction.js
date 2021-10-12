import { USER_LOGIN, USER_LOGOUT,SET_ERROR } from "../store/types/userTypes"

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: {...user}
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const setError = (str) => ({
  type: SET_ERROR,
  payload: str,
});

export const fetchUser = (user) => dispatch => {
  fetch('http://localhost:3001/auth', {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(user),
  })
  .then((response) => {
    if (response.status == 400) {
      dispatch(setError('user not found'));
    }
    return response.json();
  })
  .then((data) => dispatch(userLogin(data)));
};