import axios from 'axios';
import { push } from 'react-router-redux';
import {
   AUTH_USER,
   AUTH_ERROR
} from './types';

export function signupUser({email, username, password, confirm}){
  return dispatch => {
    axios.post('https://afternoon-bastion-14906.herokuapp.com/users/signup', {email, username, password, confirm})
    .then(response => {
      if (response.data.error){
        dispatch(authError(response.data.error))
      } else {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        dispatch(push('/dashboard'));
      }
    })
  }
}


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
