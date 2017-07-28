import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './HomePage';

class Root extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ HomePage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
