import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { CoreLayout } from '../pages';
import { hot } from 'react-hot-loader';
import * as Containers from '../containers'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <CoreLayout exact path={"/"} component={Containers.Dashboard} />
        </Switch>
      </Fragment>
    )
  }
}

export default hot(module)(App);