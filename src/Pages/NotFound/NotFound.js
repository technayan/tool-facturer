import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../assets/not-found.svg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found d-flex align-items-center'>
            <Container className='text-center'>
                <img className='not-found-img' src={notFound} alt="Page Not Found" />
                <h1 className='mt-4 mt-lg-5'>Page Not Found !</h1>
            </Container>
        </div>
    );
};

export default NotFound;