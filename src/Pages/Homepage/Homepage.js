import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import OurTools from './OurTools/OurTools';
import WhyUs from './WhyUs/WhyUs';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <About />
            <WhyUs />
            <OurTools />
        </div>
    );
};

export default Homepage;