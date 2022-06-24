import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <section className='section why-us-section'>
            <Container>
                <Row>
                    <div className="col-12">
                        <h2 className='section-title text-light'>Why Choose Us</h2>
                    </div>
                </Row>
                <Row className='mt-5 pt-3'>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-award icon"></i>
                            <h5 className='fw-bold fs-5'>Official Manufacturer</h5>
                            <p className='box-desc'>Official manufacturer of Dewalt power tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-check-circle icon"></i>
                            <h5 className='fw-bold fs-5'>High Quality</h5>
                            <p className='box-desc'>We provide high quality and durable tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-gear icon"></i>
                            <h5 className='fw-bold fs-5'>Modern Technology</h5>
                            <p className='box-desc'>We use modern technology in our tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-truck icon"></i>
                            <h5 className='fw-bold fs-5'>Personal Shipment</h5>
                            <p className='box-desc'>We have world wide personal shipment.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-building icon"></i>
                            <h5 className='fw-bold fs-5'>World Wide Branches</h5>
                            <p className='box-desc'>We have branches almost in every country.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i className="bi bi-headset icon"></i>
                            <h5 className='fw-bold fs-5'>24/7 Support</h5>
                            <p className='box-desc'>We have the best customer support team.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUs;