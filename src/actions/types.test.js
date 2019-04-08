// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import * as actions from '../actions/index';
// import * as types from '../actions/types';
// import fetchMock from 'fetch-mock';
// import expect from 'expect';
// // import { FETCH_USER, fetchUser, FETCH_MEETUPS, fetchMeetups, DELETE_MEETUPS, delete_meetups } from './types';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('should FETCH_MEETUPS', () => {
//     fetchMock.getOnce('/api/meetups', {
//       body: { meetups: ['test', 'test', 'test'] },
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//      { type: types.FETCH_MEETUPS, body: { meetups: ['test', 'test', 'test'] } }
//     ]
//     const store = mockStore({ meetups: [] })

//     return store.dispatch(actions.fetchMeetups()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

// describe('fetchUser', () => {
//   it('should return the action', () => {

//   });
// });

// describe('deleteMeetups', () => {
//   it('should return the action', () => {

//   });
// });