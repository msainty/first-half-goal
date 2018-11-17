import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from '@pages/Statistics';
import ini from '@redux/modules/firsthalfgoals/reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Statistics />, div);
  ReactDOM.unmountComponentAtNode(div);
});
