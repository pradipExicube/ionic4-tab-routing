
import { combineReducers } from 'redux';
import { ProfileReducer } from '../reducers/profile_reducers';
export const rootReducer = 

  combineReducers({
    profileData: ProfileReducer,

  })