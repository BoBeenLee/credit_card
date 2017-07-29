import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <NavItem eventKey={ 1 }>
        <Link to="/">Home</Link>
      </NavItem>
    </Nav>
  </Navbar>
  );

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;