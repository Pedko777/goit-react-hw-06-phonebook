import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './context/ThemeContext';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <ThemeContext>
      <App />
    </ThemeContext>
  </Provider>,
  document.getElementById('root'),
);
