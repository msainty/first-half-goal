// @flow
import type { Fixture, Action } from './types';
import * as actionTypes from './actionTypes';

const fetchFixtureRequest = (): Action => ({
  type: actionTypes.GET.FETCH,
});

const fetchFixtureSuccess = (availableFixtures: Array<Fixture>): Action => ({
  type: actionTypes.GET.OK,
  availableFixtures,
});

const fetchFixtureError = (error: string): Action => ({
  type: actionTypes.GET.ERROR,
  error,
});

export {
  fetchFixtureRequest,
  fetchFixtureSuccess,
  fetchFixtureError,
};
