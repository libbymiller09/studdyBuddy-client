import axios from 'axios';
import { FETCH_USER, DELETE_MEETUP } from './types';
import { FETCH_MEETUPS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitForm = (values, history) => async dispatch => {
  const res = await axios.post('/api/meetups', values);

  history.push('/meetups');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMeetups = () => async dispatch => {
  const res = await axios.get('/api/meetups');

  dispatch({ type: FETCH_MEETUPS, payload: res.data });
};

export const deleteMeetup = () => async dispatch => {
  const res = await axios.delete('/api/meetups/:id');

  dispatch({ type: DELETE_MEETUP, payload: res.data });
}