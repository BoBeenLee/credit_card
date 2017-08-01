import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TopNav from '../components/TopNav';
import HomeContainer from './Home/HomeContainer';
import WizardForm from '../components/Wizard/WizardForm';
import ResultContainer from './Result/ResultContainer';
import Result from '../components/Result/Result';
import styled from 'styled-components';

const Content = styled.div`
  padding: 0 20px;
`;

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <Content>
            <Switch>
              <Route exact path="/" component={ HomeContainer } />
              <Route path="/detail/:id" component={ WizardForm } />
              <Route path="/result" component={ Result } />
            </Switch>
          </Content>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
