import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='text-center m-5 p-5'>
            <Spinner className='m-5 p-5' animation="grow" variant="warning" />
        </div>
    );
};

export default Loading;