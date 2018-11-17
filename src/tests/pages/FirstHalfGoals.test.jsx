import React from 'react';
import { Provider } from 'react-redux';
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
        homeTeam: 'Swansea',
      }],
    },
  };
  const store = mockStore(mockState);
  const tree = renderer
    .create(<Provider store={store}><FirstHalfGoals /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
