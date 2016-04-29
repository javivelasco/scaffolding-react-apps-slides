import axios from 'axios';
import { routeActions } from 'react-router-redux';
import * as API from 'api-paths';
import * as APP from '../routes';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export function login(email, password) {
  return (dispatch) => {
    axios.post(API.LOGIN_PATH, {email, password}).then(({data: {account}}) => {
      dispatch({type: LOGIN_SUCCESS, account});
      dispatch(routeActions.push(APP.ROOT_PATH));
    }).catch((error) => {
      dispatch({type: LOGIN_FAILURE, error});
    });
  };
}
