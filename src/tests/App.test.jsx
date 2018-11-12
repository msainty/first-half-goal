import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../App';

let mockStore;
let initialState;

describe('App', () => {
  beforeEach(() => {
    const middlewares = [];
    mockStore = configureStore(middlewares);
    initialState = {
      firstHalfGoals: {
        fixtures: [],
      },
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = mockStore(initialState);
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
