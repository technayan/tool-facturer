import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../assets/not-found.svg'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5'>
            <Container className='text-center'>
                <img className='w-50' src={notFound} alt="Page Not Found" />
                <h1 className='mt-4 mt-lg-5'>Page Not Found !</h1>
            </Container>
        </div>
    );
};

export default NotFound;