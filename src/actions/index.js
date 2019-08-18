import axios from 'axios';
import { FETCH_USER, DELETE_MEETUP } from './types';
import { FETCH_MEETUPS } from './types';

// trying to connect to the api
const {API_BASE_URL} = require('../config');

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`${API_BASE_URL}/current_user`)
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitForm = (values, history) => async dispatch => {
  const res = await axios.post(`${API_BASE_URL}/meetups', values`);

  history.push('/meetups');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMeetups = () => async dispatch => {
  const res = await axios.get(`${API_BASE_URL}/meetups`);

  dispatch({ type: FETCH_MEETUPS, payload: res.data });
};

export const deleteMeetup = () => async dispatch => {
  const res = await axios.delete(`${API_BASE_URL}meetups/:id`);

  dispatch({ type: DELETE_MEETUP, payload: res.data });
}