import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/createStore';
import AppContainer from './containers/AppContainer';

import history from './lib/history';

ReactDOM.render(
  <Provider store={store()}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
