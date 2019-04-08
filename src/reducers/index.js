import { combineReducers } from 'redux';
import { reducer as reduxform } from 'redux-form';
import authReducer from './authReducer';
import meetuspReducer from './meetupsReducer';
import deleteMeetupReducer from './deleteMeetupReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxform,
  meetups: meetuspReducer,
  delete: deleteMeetupReducer
});