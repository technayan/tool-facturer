import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='section'>
            <h2 className='section-title my-5'>Portfolio</h2>

            <Container>
                <Row className='g-5'>
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/4Szz0GJ/dev-nayan.png" className='w-100 profile-img' alt="Abdullah Al Mamun Nayan" />

                        <h4 className='name text-center mt-4'>Abdullah Al Mamun Nayan</h4>

                        <div className="d-flex align-items-center">
                            <i className="bi bi-envelope fs-5 mt-2 me-2"></i><p className='mt-4'><a href="mailto:md.nayan8494@gmail.com" className='text-dark'>md.nayan8494@gmail.com</a></p>
                        </div>

                        <div className="d-flex align-items-center">
                            <i className="bi bi-phone fs-5 me-2"></i><p className='mb-0'>+8801944516122</p>
                        </div>

                        <div className='mt-4'>

                            <a href="https://www.facebook.com/dev.nayan20" className='fs-3 me-2 text-dark profile-social-link' target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/md-abdullah-nayan-711884220/" className='fs-3 mx-2 text-dark profile-social-link' target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <h4 className='portfolio-title'>About Me :</h4>
                        <p>I am a Jr. Web Developer. I build web application using React JS, Express JS, Node JS, and MongoDB. My goal is to become a Senior full stack Web Developer. I am learning new technologies everyday. I want to build my career in this field. I am focused to achieve my goal. I am working hard for last 6 months to prepare myself as a Web Developer. In this period I build some projects for my portfolio.</p>

                        <h4 className='portfolio-title mt-3'>Education :</h4>
                        <p><strong>Institution :</strong> National University.</p>
                        <p><strong>Degree :</strong> Bachelor of Arts.</p>
                        <p><strong>Depertment :</strong> English.</p>


                        <h4 className='portfolio-title mt-3'>Skills :</h4>
                        <Row>
                            <div className="col-md-6">
                                <li className='mb-3'>HTML 5</li>
                                <li className='mb-3'>CSS 3</li>
                                <li className='mb-3'>Bootstrap 5</li>
                                <li className='mb-3'>Tailwind CSS</li>
                                <li className='mb-3'>Daisy UI</li>
                            </div>
                            <div className="col-md-6">
                                <li className='mb-3'>Javascript</li>
                                <li className='mb-3'>React JS</li>
                                <li className='mb-3'>Node JS</li>
                                <li className='mb-3'>Express JS</li>
                                <li className='mb-3'>Mongo DB</li>
                            </div>
                        </Row>
                        
                        
                        <h4 className='portfolio-title mt-5'>Recent Works :</h4>
                        <Row className='g-4 mt-1'>
                            <div className="col-md-6">
                                <div className="work">
                                    <a href="http://furni-corner.web.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://i.ibb.co/99X17gp/Furni-Corner-Furniture-Warehouse.png" className='w-100' alt="Furni Corner Furniture Warehouse" />
                                    </a>
                                    <a href="https://furni-corner.web.app/" className='fs-5 fw-bold text-dark my-2 d-inline-block project-name' target='_blank' rel="noopener noreferrer">Furni Corner</a>
                                    <p>Furni Corner is a furniture warehouse company's website. Created with React JS, Node JS, Express JS, MongoDB.</p>
                                    <a href='https://furni-corner.web.app/' className='primary-btn live-link-btn py-2 text-center d-block text-dark fw-bold' target="_blank" rel="noopener noreferrer"> Live Link</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work">
                                    <a href="http://combat-gym-training.web.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://i.ibb.co/sbPcbYt/Combat-Gym-Training.png" className='w-100' alt="Combat Gym Training" />  
                                    </a>
                                    <a href="https://combat-gym-training.web.app/" className='fs-5 fw-bold text-dark my-2 d-inline-block project-name' target='_blank' rel="noopener noreferrer">Combat Gym Training</a>
                                    <p>Combat Gym Training is a gym training website. I used React JS to build it's front-end. It has signin and signup system.</p>
                                    <a href='https://combat-gym-training.web.app/' className='primary-btn live-link-btn py-2 text-center d-block text-dark fw-bold' target="_blank" rel="noopener noreferrer"> Live Link</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work">
                                    <a href="http://sony-headphone.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://i.ibb.co/5c5RGjm/Sony-Headphones.png" className='w-100' alt="Sony Headphones" />
                                    </a>
                                    <a href="https://sony-headphone.netlify.app/" className='fs-5 fw-bold text-dark my-2 d-inline-block project-name' target='_blank' rel="noopener noreferrer">Sony Headphones</a>
                                    <p>Sony Headphones is a product review website which shows the reviews of the user. I used React JS for it's front-end.</p>
                                    <a href='http://sony-headphone.netlify.app/' className='primary-btn live-link-btn py-2 text-center d-block text-dark fw-bold' target="_blank" rel="noopener noreferrer"> Live Link</a>
                                </div>
                            </div>
                        </Row>

                        
                        


                    </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default Portfolio;