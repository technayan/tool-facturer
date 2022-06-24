import React from 'react';
import About from './About/About';
import BusinessSummery from './BusinessSummary/BusinessSummery';
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
            <BusinessSummery />
        </div>
    );
};

export default Homepage;