import React, { Component }  from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      FutbolRoom
    </Navbar.Brand>
  </Navbar>
)

export default Header;