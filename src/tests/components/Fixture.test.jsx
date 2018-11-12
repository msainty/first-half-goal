import React from 'react';
import ReactDOM from 'react-dom';
import Fixture from '@components/Fixture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fixture />, div);
  ReactDOM.unmountComponentAtNode(div);
});
