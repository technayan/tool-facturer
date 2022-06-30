import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Loading from '../../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    const {_id, userName, userEmail, totalPrice} = order;

    useEffect(() =>{
        fetch('https://whispering-bastion-88896.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({totalPrice})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '');

        setSuccess('');

        setProcessing(true);

        // Confirm Card Payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    }
                }
            }
        )
        
        if(intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
            toast.error('Payment failed!')
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            toast.success('Payment successful!')
            setSuccess('Congrats! Your payment is successful. You will get your products within 7 official days.')
            
            // Store Payment on Database
            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://whispering-bastion-88896.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
            .then(data => {
                setProcessing(false);
            })
        }

        // Loading 
        if(processing) {
            return <Loading />
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <div className="text-end mt-5">
                    <button className='btn btn-small pay-btn bg-warning' type="submit" disabled={!stripe || !clientSecret}>Pay</button>
                </div>
            </form>
            {
                cardError && <p className='text-danger mt-3'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-success mt-3'>{success}</p>
                    <p>Transaction Id : <span className='fw-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;