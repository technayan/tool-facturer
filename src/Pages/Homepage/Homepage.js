import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import WhyUs from './WhyUs/WhyUs';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <About />
            <WhyUs />
        </div>
    );
};

export default Homepage;