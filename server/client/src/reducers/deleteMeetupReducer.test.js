import { DELETE_MEETUP } from '../actions/types';
import deleteMeetupReducer from './deleteMeetupReducer';

it('returns default initial state of ` ` when no action is called', () => {
  const newState = deleteMeetupReducer(undefined, {});
  expect(newState).toEqual([]);
});

it('returns state when recieving action type `DELETE_MEETUP`', () => {
  const newState = deleteMeetupReducer(undefined, { type: DELETE_MEETUP });
  expect(newState).toBe(undefined);
});