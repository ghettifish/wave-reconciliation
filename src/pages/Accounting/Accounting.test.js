import React from 'react';
import ReactDOM from 'react-dom';
import Accounting from './Accounting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accounting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
