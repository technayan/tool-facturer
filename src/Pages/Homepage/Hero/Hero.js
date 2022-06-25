import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-section'>
                <div className="hero-text text-center mt-5">
                    <h3 className='text-white hero-title'>Find Your <span className='text-warning'>Tools</span></h3>
                    <p className='text-white mt-3 mx-auto hero-desc'>We are officailly manufacturer of Dewalt power tools. Choose your power tools and order us.</p>
                    <a className='primary-btn rounded py-3 px-4 px-md-5 text-decoration-none text-dark fw-bold mt-3' href='#tools'>Our Tools</a>
                </div>
        </section>
    );
};

export default Hero;