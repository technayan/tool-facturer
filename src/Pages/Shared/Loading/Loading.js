import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='text-center m-5 p-5'>
            <Spinner animation="grow" variant="warning" />
        </div>
    );
};

export default Loading;