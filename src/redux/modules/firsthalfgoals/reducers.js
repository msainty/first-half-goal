// @flow
import * as actionTypes from './actionTypes';
import type { State, Action } from './types';

const initialState: State = {
  fixtures: [],
};

const firstHalfGoalsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.GET.FETCH:
      return {
        ...state,
        satus: 'processing',
      };
    case actionTypes.GET.OK:
      return {
        ...state,
        fixtures: action.availableFixtures,
        satus: 'ok',
      };
    case actionTypes.GET.ERROR:
      return {
        ...state,
        error: action.error,
        satus: 'error',
      };
    default:
      return state;
  }
};

export default firstHalfGoalsReducer;
