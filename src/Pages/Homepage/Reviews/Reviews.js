import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const url = 'http://localhost:5000/reviews';
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [url])

    return (
        <section className='section reviews-section'>
            <h2 className='section-title mb-5 text-light'>Client Reviews</h2>
            <Container>
                <Carousel className='text-center mx-auto text-light mb-5' id="carouselExampleControls">
                    {
                        reviews.map(review => <Carousel.Item key={review._id} review={review}>
                            <div>
                                <h3>{review.userName}</h3>
                                <p className="fw-bold my-3">{
                                    review.rating === '1' ? <i className="bi bi-star-fill rating"></i> :
                                    review.rating === '2' ? <>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                    </> :
                                    review.rating === '3' ? <>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                    </> :
                                    review.rating === '4' ? <>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                    </> : <>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                        <i className="bi bi-star-fill rating"></i>
                                    </>
                                } </p>
                                
                                <p>"{review.review}"</p>
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Container>
        </section>
    );
};

export default Reviews;