import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const propTypes = {};

const defaultProps = {};

const TopNav = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Credit Card</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/">
        <NavItem eventKey={ 1 }>
          Home
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
  );

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;