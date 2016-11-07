import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import authReducer from './authReducer';
import userReducer from './userReducer';
import teamReducer from './teamReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  team: teamReducer,
  home: homeReducer,
  form
});

export default rootReducer;
