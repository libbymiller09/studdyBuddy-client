import { FETCH_MEETUPS } from '../actions/types';
import meetupsReducer from './meetupsReducer';

it('returns default state when no action called', () => {
  const newState = meetupsReducer(undefined, {});
  expect(newState).toEqual([]);
});

it('returns state when action `FETCH_MEETUPS` is called', () => {
  const newState = meetupsReducer(undefined, { type: FETCH_MEETUPS });
  expect(newState).toBe(undefined);
});