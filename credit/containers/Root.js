import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import DetailContainer from './Detail/DetailContainer';
import TopNav from '../components/TopNav';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route path="/detail/:id" component={ DetailContainer } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
