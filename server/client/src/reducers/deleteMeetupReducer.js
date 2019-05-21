import { DELETE_MEETUP } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case DELETE_MEETUP:
      return action.payload;
    default:
      return state;
  }
}