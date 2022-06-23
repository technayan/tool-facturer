import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Container>
        <Link to={'/'}><img src={Logo} className='' alt="ToolFacturer" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link text-dark' to={'/blogs'}>Blogs</Link>
            <Link className='nav-link text-dark' to={'/portfolio'}>Portfolio</Link>
          </Nav>
          <Nav>
          <Link className='nav-link text-dark' to={'/login'}>Login</Link>
          <Link className='nav-link text-dark' to={'/register'}>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;