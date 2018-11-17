import React from 'react';
import ReactDOM from 'react-dom';
import FixtureList from '@components/FixtureList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FixtureList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
