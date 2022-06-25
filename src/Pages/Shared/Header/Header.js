import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Logo from '../../../assets/logo.png'
import './Header.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  // Signout Handler
  const signOutHandler = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light" className='py-3 py-md-2 fixed-top'>
      <Container>
        <Link to={'/'}><img src={Logo} className='' alt="ToolFacturer" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pt-4 pt-lg-0">
            <Link className='nav-link' to={'/blogs'}>Blogs</Link>
            <Link className='nav-link' to={'/portfolio'}>Portfolio</Link>
          </Nav>
          <Nav>
          {
            user ? <button onClick={signOutHandler} className='btn nav-link'>Logout</button> :
            <>
              <Link className='nav-link' to={'/login'}>Login</Link>
              <Link className='nav-link' to={'/register'}>Register</Link>
            </>
          }
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;