import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Logo from '../../../assets/logo.png'
import './Header.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  
 

  // Signout Handler
  const signOutHandler = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/login');
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light" className='py-3 py-md-2 fixed-top'>
      <Container>
        <Link to={'/'}><img src={Logo} className='' alt="ToolFacturer" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-lg-auto ms-lg-5 pt-4 pt-lg-0">
            <Link className='nav-link' to={'/blogs'}>Blogs</Link>
            <Link className='nav-link' to={'/portfolio'}>Portfolio</Link>
            {
              user && <Link className='nav-link' to={'/dashboard'}>Dashboard</Link>
            }
          </Nav>
          <Nav>
          {
            user ? <>
              <p className="mt-3">{user?.displayName}</p>
              <button onClick={signOutHandler} className='btn nav-link text-start'>Logout</button></> :
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