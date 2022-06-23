import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-section'>
                <div className="hero-text">
                    <h3 className='text-warning hero-title'>Find Your Tools Here</h3>
                    <p className='text-white mt-3 mx-auto hero-desc'>We are officailly manufacturer of Dewalt power tools. You will find any kind of power tools here. We manufacture power tools and supply them all over the world. If your are a power tools dealer, then you can order us for power tools.</p>
                    <a className='primary-btn rounded py-3 px-5 text-decoration-none text-dark fw-bold mt-3' href='#tools'>Our Tools</a>
                </div>
        </section>
    );
};

export default Hero;