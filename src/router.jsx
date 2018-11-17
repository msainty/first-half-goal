// @flow
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import FirstHalfGoals from '@pages/FirstHalfGoals';
import Statistics from '@pages/Statistics';
import App from './App';

export const RootRedirect = () => <Redirect to="/first-half-goals" />;

const Router = () => (
  <App>
    <Switch>
      <Route exact path="/" component={RootRedirect} />
      <Route path="/first-half-goals" component={FirstHalfGoals} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/" component={RootRedirect} />
    </Switch>
  </App>
);

export default Router;
