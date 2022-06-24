import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <section className='why-us-section'>
            <Container>
                <Row>
                    <div className="col-12">
                        <h2 className='section-title text-center text-light'>Why Choose Us</h2>
                    </div>
                </Row>
                <Row className='mt-5 pt-3'>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-award icon"></i>
                            <h4 className='fw-bold fs-5'>Official Manufacturer</h4>
                            <p className='box-desc'>Official manufacturer of Dewalt power tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-check-circle icon"></i>
                            <h4 className='fw-bold fs-5'>High Quality</h4>
                            <p className='box-desc'>We provide high quality and durable tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-gear icon"></i>
                            <h4 className='fw-bold fs-5'>Modern Technology</h4>
                            <p className='box-desc'>We use modern technology in our tools.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-truck icon"></i>
                            <h4 className='fw-bold fs-5'>Personal Shipment</h4>
                            <p className='box-desc'>We have world wide personal shipment.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-building icon"></i>
                            <h4 className='fw-bold fs-5'>World Wide Branches</h4>
                            <p className='box-desc'>We have branches almost in every country.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="box text-light">
                            <i class="bi bi-headset icon"></i>
                            <h4 className='fw-bold fs-5'>24/7 Support</h4>
                            <p className='box-desc'>We have the best customer support team.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUs;