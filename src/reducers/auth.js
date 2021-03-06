import {
  AUTH_USER,
  UNAUTH,
  AUTH_ERROR,
  FETCH_ANY
 } from '../actions/types';


export default function(state = {}, action){
  switch(action.type){
    case AUTH_USER:
      return {...state, authenticated: true};
    case UNAUTH:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    case FETCH_ANY:
      return {...state, user: action.payload.id};
    default:
      return state;
  }

}
