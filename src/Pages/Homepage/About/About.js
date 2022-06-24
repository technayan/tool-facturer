import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutImg from '../../../assets/about.jpg'
import './About.css'

const About = () => {
    return (
        <section className='about-section py-2 my-5 py-lg-5 my-lg-5'>
            <Container>
                <Row className='align-items-center'>
                    <div className="col-md-6">
                        <h2 className='section-title'>About Us</h2>
                        <p className='section-desc mb-5'>We are the official dewalt power tools manufacturer. We provide power tools to the dealers of all over the world. We have our own shipment system so that our customers get their products on time. Our products are designed by professional Engineer and made with imported automatic machine. So, our tools contain high quality and ultra durability.</p>
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