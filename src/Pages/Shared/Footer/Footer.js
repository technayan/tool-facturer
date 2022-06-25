import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LogoYellow from '../../../assets/logo-yellow.png';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='pt-5 pb-3 bg-dark'>
            <Container>
                <Row>
                    <div className="col-md-4">
                        <img src={LogoYellow} alt="ToolFacturer" />
                        <p className='text-white mt-3'>We are the official manufacturer of Dewalt power tools. We have 10 years of experience in producing power tools. We supply our products to the dealers all over the world. We have our own shipment system.</p>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <h4 className="footer-title text-warning mb-4">New Tools :</h4>
                        <p className='text-light'>Specialty Drill</p>
                        <p className='text-light'>Chop Saw</p>
                        <p className='text-light'>Capble Cutter</p>
                        <p className='text-light'>Demolition Hammer</p>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <h4 className="footer-title text-warning mb-4">Our Location :</h4>
                        <p className='text-light'><i className="bi bi-geo-alt text-warning me-2"></i>Muldoon Ave, New York, USA.</p>
                        <p className='text-light'><i className="bi bi-telephone text-warning me-2"></i>+8801944516122</p>
                        <p className='text-light'><i className="bi bi-envelope text-warning me-2"></i><a href="mailto:nayan050620@gmail.com" className='text-light'>nayan050620@gmail.com</a></p>
                        <div className='text-center text-md-start mt-4'>
                            <a href="https://www.facebook.com/dev.nayan20" className='me-3 social-link text-warning'><i className="bi bi-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/md-abdullah-nayan-711884220/" className='mx-3 social-link text-warning'><i className="bi bi-linkedin"></i></a>
                            <a href="https://twitter.com/dev_nayan1" className='mx-3 social-link text-warning'><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="copyright text-center mt-4 mt-md-5">
                <p className='text-light'>&copy; Copyright {year} All rights reserved. </p>
            </div>
        </footer>
    );
};

export default Footer;