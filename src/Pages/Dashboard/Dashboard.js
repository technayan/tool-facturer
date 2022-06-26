import React, { useState } from 'react';
import { Button, Container, Offcanvas, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='mt-5 py-5'>
            
            <Container>
                <Row>
                    <div className="col-md-3">
                        <div className="sidebar py-3 d-flex flex-column">
                            <Link to={'/dashboard'} className="sidebar-link" >My Orders</Link>
                            <Link to={'/dashboard/add-review'} className="sidebar-link" >Add Review</Link>
                            <Link to={'/dashboard/my-profile'} className="sidebar-link" >My Profile</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h2>Welcome to dashboad</h2>

                        <Outlet />

                        {/* Offcanvas for Tablet and Mobile */}
                        <Button variant="primary" className="d-lg-none" onClick={handleShow}>Launch</Button>

                        <Offcanvas show={show} onHide={handleClose} responsive="lg">
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='d-flex flex-column'>
                                <Link to={'/dashboard/my-orders'} >My Orders</Link>
                                <Link to={'/dashboard/add-review'} >Add Review</Link>
                                <Link to={'/dashboard/my-profile'} >My Profile</Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                

                
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;