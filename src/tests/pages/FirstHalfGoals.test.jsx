import React from 'react';
import { Provider } from 'react-redux';
// import moment from 'moment';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import FirstHalfGoals from '@pages/FirstHalfGoals';
import initialState from '../redux/initialState';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders with no fixtures', () => {
  const store = mockStore(initialState);

  const tree = renderer
    .create(<Provider store={store}><FirstHalfGoals /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with fixtures', () => {
  const mockState = {
    ...initialState,
    firstHalfGoals: {
      fixtures: [{
        uuid: '1',
        kickOff: '2019-01-02',
        country: 'England',
        league: 'PL',
        status: 0.6,
        homeTeam: 'Manchester United',
        awayTeam: 'Brighton',
        played: 15,
        noOfNoScoreFirstHalf: 0,
        percentageOfAFirstGoalHome: 0.66,
        percentageOfAFirstGoalAway: 0.55,
        probability: 0.85,
        price: 1.35,
        matched: 344,
        rating: 5,
      }],
    },
  };
  const store = mockStore(mockState);
  const tree = renderer
    .create(<Provider store={store}><FirstHalfGoals /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
