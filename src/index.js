import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import 'normalize.css/normalize.css';
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/styles.scss';
import App from './components/App';
import Routes from './routes';

render(
  <Provider store={store}>
    <App>
      {Routes}
    </App>
  </Provider>,
  document.getElementById('app')
)

