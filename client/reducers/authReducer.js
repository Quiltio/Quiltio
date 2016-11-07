import {
  AUTH,
  AUTH_ERROR,
  UNAUTH
} from '../actions/actionTypes';

const INITIAL_STATE = { currentUser: {}, authenticated: false, error: '' };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case: AUTH:
      return { ...state, error: '', authenticated: true, currentUser: action.payload };
    case UNAUTH:
      return { ..state, error: '', authenticated: false, currentUser: {} };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
