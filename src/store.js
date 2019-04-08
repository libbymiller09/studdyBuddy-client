import {creatStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default creatStore(
  combineReducers({
    form: formReducer
  })
);