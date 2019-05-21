import { FETCH_USER } from '../actions/types';
import authReducer from './authReducer';

it('returns default when initial state of `null` when no action is passed', () => {
  const newState = authReducer(undefined, {});
  expect(newState).toBe(null);
});

it('returns state upon recieving an action type `FETCH_USER`', () => {
  const newState = authReducer(undefined, { type: FETCH_USER });
  expect(newState).toBe(false);
}); 