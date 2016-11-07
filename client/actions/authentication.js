import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH,
  UNAUTH,
  AUTH_ERROR
} from './actionTypes';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payloas: error
  };
}

//Insert specific db fields
function removePrivateInfo(data) {
  delete data.password;
  return data;
}

export function login(input) {
  var props = { ...input };
  return dispatch => {
    //Insert correct endpoint here
    axios.put('/api/auth/local', props)
      .then(resp => {
        let data = removePrivateInfo(resp.data);
        localStorage.setItem('token', resp.headers.auth);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({
          type: AUTH,
          payload: data
        })
        //Insert correct endpoint for user name here
        browserHistory.push(`/user/${resp.data.id}`);
      })
      .catch((err) => {
        dispatch(authError('There was a problem with your login credentials.'));
      });
  }
}

export function signUp(input) {
  //Insert correct fields from db here
  let data = {
    name: input.name,
    email: input.email,
    password: input.password,
    photo: input.photo,
    job: input.job,
    industry: input.industry,
    location: input.location,
    areas: input.areas
  }
return dispatch => {
  //Insert correct endpoint here
  axios.post('/api/user', data)
    .then(resp => {
      let data = removePrivateInfo(resp.data);
      localStorage.setItem('token', resp.headers.auth);
      localStorage.setIten('user', JSON.stringify(data));
      dispatch({
        type: AUTH,
        payload: data
      })
      //Insert correct endpoint for user name here
      browserHistory.push(`/user/${data.id}`);
    })
    .catch((err) => {
      dispatch(authError('There was a problem with the info you entered'));
    });
  }
}

export function signOut(user) {
  return dispatch => {
    dispatch({
      type: UNAUTH
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    browserHistory.push('/');
    //Insert correct endpoint for logout here
    axios.put(`/api/auth/local/${user}`)
      .then(resp => {
        console.log('User has successfully signed out.');
      })
  }
}
