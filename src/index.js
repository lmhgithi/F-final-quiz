import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/Home/App';
import store from './store';
import './styles/reboot.scss';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  