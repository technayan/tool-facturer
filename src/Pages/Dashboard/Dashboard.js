import React, { useState } from 'react';
import { Button, Container, Offcanvas, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
import Logo from '../../assets/logo.png';

const Dashboard = () => {
    // Sidebar
    const [show, setShow] = useState(false);
    
    // Sidebar Show and Hide Handler
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='mt-5 mt-lg-5 py-5 dashboard-w'>
            
            <Container>
                <Row>
                    <div className="col-lg-3">
                        <div className="sidebar d-flex flex-column d-none d-lg-block">
                            <Link to={'/dashboard'} className="sidebar-link" >My Orders</Link>
                            <Link to={'/dashboard/add-review'} className="sidebar-link" >Add Review</Link>
                            <Link to={'/dashboard/my-profile'} className="sidebar-link" >My Profile</Link>
                        </div>
                        <Button className="d-lg-none btn bg-light text-dark border-dark fs-2 px-2 py-0 mb-4" onClick={handleShow}><i className="bi bi-list"></i></Button>
                    </div>
                    <div className="col-lg-9">
                        <h4>Dashboad</h4>

                        <Outlet />

                        {/* Offcanvas for Tablet and Mobile */}
                        

                        <Offcanvas show={show} onHide={handleClose} responsive="lg">
                            <Offcanvas.Header closeButton className='bg-warning'>
                            <Offcanvas.Title><img src={Logo} alt="Tool Facturer"/></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='d-flex flex-column'>
                                <Link to={'/dashboard'} className="sidebar-link" >My Orders</Link>
                                <Link to={'/dashboard/add-review'} className="sidebar-link" >Add Review</Link>
                                <Link to={'/dashboard/my-profile'} className="sidebar-link" >My Profile</Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                

                
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;