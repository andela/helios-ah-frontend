import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import styles from '../src/styles/styles.scss';

import App from './components/App';
import routes from './routes';

ReactDOM.render((
      <App>
          {routes}
      </App>
  ), document.getElementById('app'));
