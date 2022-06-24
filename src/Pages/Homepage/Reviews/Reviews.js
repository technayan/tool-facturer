import React from 'react';
import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Reviews.css'

const Reviews = () => {
    return (
        <section className='section reviews-section'>
            <h2 className='section-title mb-5 text-light'>Client Reviews</h2>
            <Container>

                <Carousel className='text-center mx-auto text-light mb-5'>
                    <Carousel.Item>
                        <div>
                            <h3>Richard Boston</h3>
                            <div className="rating my-2">
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                            </div>
                            <p>The product quality is very good. I am a power tool dealer I ordered tools to ToolFacturer and the delivery products are very good in quality.</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <h3>Richard Boston</h3>
                            <div className="rating my-2">
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                                <i class="bi bi-star-fill rating"></i>
                            </div>
                            <p>The product quality is very good. I am a power tool dealer I ordered tools to ToolFacturer and the delivery products are very good in quality.</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            
        </section>
    );
};

export default Reviews;