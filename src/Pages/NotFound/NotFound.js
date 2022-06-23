import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../assets/not-found.svg'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5'>
            <Container>
                <img className='w-25' src={notFound} alt="Page Not Found" />
                <h1 className='mt-5'>Page Not Found !</h1>
            </Container>
        </div>
    );
};

export default NotFound;