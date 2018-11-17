/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '@redux/store/configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';

const store = configureStore();

export default ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root') || document.createElement('div'),
);
registerServiceWorker();
