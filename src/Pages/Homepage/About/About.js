import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutImg from '../../../assets/about.jpg'
import './About.css'

const About = () => {
    return (
        <section className='section about-section'>
            <Container>
                <Row className='align-items-center'>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className='section-title-left'>About Us</h2>
                        <p className='section-desc mb-4'>We are the official dewalt power tools manufacturer. We provide power tools to the dealers of all over the world. We have our own shipment system so that our customers get their products on time. Our products are designed by professional Engineer and made with imported automatic machine. So, our tools contain high quality and ultra durability.</p>
                        <a href="#contact" className='primary-btn rounded py-3 py-md-3 px-4 px-md-4 text-decoration-none text-dark fw-bold mb-5 mb-md-0'>Contact Us</a>
                        
                    </div>
                    <div className="col-md-6">
                        <img src={AboutImg} className="img-fluid about-img" alt="About" />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default About;