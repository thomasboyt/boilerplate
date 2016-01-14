require('../styles/main.less');

import './polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// Set up store
import createStore from './store';
const store = createStore();

// Set up router
import routes from './config/routes';
import history from './config/history';

import Root from './views/Root';

ReactDOM.render((
  <Root store={store} routes={routes} history={history} />
), document.getElementById('container'));
