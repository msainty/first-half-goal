// @flow
import configureStore from '@redux/store/configureStore';
import { initialState as initialFirstHalfGoalState } from '@redux/modules/firsthalfgoals/reducers';

const initialState = {
  firstHalfGoals: initialFirstHalfGoalState,
};

describe('Redux store', () => {
  it('State returns correct values with initial state', () => {
    expect(configureStore(initialState).getState()).toEqual(initialState);
  });
});
