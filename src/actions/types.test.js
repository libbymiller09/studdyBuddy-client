import React from 'react';
import {shallow, mount} from 'enzyme';
import moxios from 'moxios';

import { storeFactory } from '../test/testUtils';
import { fetchMeetups, fetchUser, deleteMeetup, submitForm } from './index';

describe('action dispatchers', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('fetch_meetup action dispatcher', () => {
    it('add meetup to state', () => {
      const meetup = {
        subject: 'node.js',
        time: 'noon',
        place: 'Prince coffee',
        _user: 'TestUser',
      };
      const store = storeFactory();
  
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: meetup,
        });
      });
  
      return store.dispatch(fetchMeetups())
        .then(() => {
          const res = store.getState();
        });
        expect(res.meetup).toBe(meetup);
    });
  });
  
  describe('fetch_user action dispatcher', () => {
    it('add meetup to state', () => {
      const user = {
        googleId: '1234',
      };
      const store = storeFactory();
  
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: user,
        });
      });
  
      return store.dispatch(fetchUser())
        .then(() => {
          const res = store.getState();
        });
        expect(res.user).toBe(meetup);
    });
  });
  
  describe('delete_meetup action dispatcher', () => {
    it('delete meetup from state', () => {
      const meetup = {
        subject: 'node.js',
        time: 'noon',
        place: 'Prince coffee',
      };
      const store = storeFactory();
  
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: meetup,
        });
      });
  
      return store.dispatch(deleteMeetup())
        .then(() => {
          const res = store.getState();
        });
        expect(res.meetup).toBe({});
    });
  });
});

