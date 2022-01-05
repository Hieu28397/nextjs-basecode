import { combineReducers } from 'redux';

import userReducer from './user';

const appReducer = combineReducers({
  userState: userReducer,
});

export default appReducer;
