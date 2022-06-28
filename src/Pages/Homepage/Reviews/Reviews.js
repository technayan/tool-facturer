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

    // Total Reviews
    const totalReviews = reviews.length;

    // Recent Reviews
    const recentReviews = reviews.slice(totalReviews - 6, totalReviews);

    

    return (
        <section className='section reviews-section'>
            <h2 className='section-title mb-5 text-light'>Client Reviews</h2>
            <Container>
                <Carousel className='text-center mx-auto text-light mb-5'>
                    {
                        recentReviews.map(review => <Carousel.Item key={review._id} review={review}>
                            <div>
                                <h3>{review.userName}</h3>
                                <p className="fw-bold my-2">{review.rating} <i className="bi bi-star-fill rating"></i></p>
                                
                                <p>{review.review}</p>
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Container>
            
        </section>
    );
};

export default Reviews;