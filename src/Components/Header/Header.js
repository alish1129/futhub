import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const logo = require('../../Assets/logo2.png')

const Header = (props) => (
	<Navbar className="navbar" variant="dark">
		<Navbar.Brand href="/">
			<img
				alt=""
				src={logo}
				height="40"
				className="d-inline-block align-top"
			/>{' '}
		</Navbar.Brand>
		<Nav className="mr-auto">
			<Nav.Link className="navLink" href="home">Home</Nav.Link>
			<Nav.Link className="navLink" href="leagues">Leagues</Nav.Link>
			<Nav.Link className="navLink" href="highlights">Highlights</Nav.Link>
		</Nav>
		<Form inline>
			<FormControl type="text" placeholder="Search" className="searchInput mr-sm-2" />
			<Button className="searchButton">Search</Button>
		</Form>
	</Navbar>
)

export default Header;