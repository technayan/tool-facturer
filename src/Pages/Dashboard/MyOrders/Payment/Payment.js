import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51LDCCcIEh0IjzcDapo1saLUS2nwXYU6NaXv7HRD0PInYKqzGwKKH10kX5AVKd3pjK4LlQgwOwBVU17VvCk2w8Uhw00PCViog0j');

const Payment = () => {
    const {id} = useParams();

    const url = `https://whispering-bastion-88896.herokuapp.com/order/${id}`;


    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading />
    }
    
    return (
        <div>
            <h6 className='fw-bold my-4'>Pay for : {order?.productName}</h6>
            <Card className='rounded mt-4 d-flex flex-row'>
                <Card.Body>
                    <p>Hi, <strong>{order?.userName}</strong></p>
                    <p>Please pay <strong>${order?.totalPrice}</strong> to complete your order for {order.orderQuantity} pcs. of {order.productName}.</p>
                </Card.Body>
                <Card className='w-75'>
                    <Card.Body>
                        <h6 className='mb-3'>Enter your card information :</h6>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                    </Card.Body>
                </Card>
            </Card>
            
        </div>
    );
};

export default Payment;