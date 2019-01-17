import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import '../src/styles/styles.scss';
import App from './components/App';
import Routes from './routes';

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('app')
)

