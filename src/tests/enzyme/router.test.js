// flow
import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import FirstHalfGoals from '@pages/FirstHalfGoals';
import Statistics from '@pages/Statistics';
import Router, { RootRedirect } from '../../router';

it('renders correct routes', () => {
  const wrapper = shallow(<Router />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => { // eslint-disable-line
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component; // eslint-disable-line
    return pathMap;
  }, {});
  expect(pathMap['/first-half-goals']).toBe(FirstHalfGoals);
  expect(pathMap['/statistics']).toBe(Statistics);
  expect(pathMap['/']).toBe(RootRedirect);
});
