import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import './Purchase.css'

const Purchase = () => {
    const [product, setProduct] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [orderInRange, setOrderInRange] = useState(true);
    const [odrQnt, setOdrQnt] = useState(0);

    // Get the Product Id
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        });
    }, [id]);

  
    const checkQnt = (event) => {
        const quantity = event.target.value;
        if((quantity < product.minOrderQnt || quantity > product.availableQnt)) {
            setOrderInRange(false);
        } else {
            setOrderInRange(true);
        }
        setOdrQnt(quantity);
    }

    let quantityError;
    if(!orderInRange) {
        quantityError = <span className='text-danger d-block'>Quantity should be in {product.minOrderQnt} to {product.availableQnt}.</span>
    }

    const total = odrQnt * product.price ||  product.minOrderQnt * product.price; 

    // Loading
    if(loading) {
        return <Loading />
    }

    // Error
    if(error) {
        toast('Please try again !');
    }

    

    const handleOrder = (event) => {
        event.preventDefault();
    }
    
    
    
    
    


    return (
        <div className='my-5 py-5'>
            <Container>

                <h2 className='mb-5'>Purchase : {product.name}</h2>
                <Row>
                    <div className="col-md-6 col-lg-8">
                        <div className="d-lg-flex justify-content-between">
                            <img src={product.imageUrl} className="w-50 mb-4 mb-md-0 h-100" alt={product.name} />
                            <div className="product-info ms-md-3">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={handleOrder} className="purchase-form mt-4 mt-md-0">
                            <h3 className='text-center
                            fw-bold mt-2 mb-3'>Purchase</h3>
                            <input type="text" name='name' className='p-2 w-100 my-2' value={user.displayName} disabled />
                            <input type="email" name='email' className='p-2 w-100 my-2' value={user.email} disabled />
                            <p className='mt-2'>Min. Order Quantity: {product.minOrderQnt}</p>
                            <p>Available Quantity: {product.availableQnt}</p>
                            <p>Price per Unit: ${product.price}</p>
                            <div className='d-flex justify-content-between align-items-center mb-1'>
                            <p className='mb-0'>Order Quantity: </p>
                            <input type="number" name='orderQuantity' onChange={checkQnt} id='order-quantity' className='w-25 p-1' defaultValue={product.minOrderQnt} />
                            </div>

                            {quantityError}

                            <p className='mt-1 fw-bold'>Total: ${total}</p>
                            {
                                orderInRange ? <input className='w-100 primary-btn' type="submit" value="Order" />:
                                <input className='w-100 p-2' type="submit" value="Order" disabled/>
                            }

                        </form>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;