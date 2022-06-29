import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Col>
            <Card className='pt-4'>
                <Card.Img variant="top" src={product.imageUrl} className='w-50 mx-auto' />
                <Card.Body>
                <Card.Title className='fw-bold text-capitalize'>{product.name}</Card.Title>
                <Card.Text>{product.description.slice(0,150)}...</Card.Text>
                <h6 className='fw-bold'>Min Order Qnt : {product.minOrderQnt}</h6>
                <h6 className='fw-bold'>Available Qnt : {product.availableQnt}</h6>
                <h6><span className='fw-bold'>Price : ${product.price}</span> /unit </h6>
                <Link to={`/products/${product._id}`} className='primary-btn w-100 mt-3 text-center text-dark text-decoration-none fw-bold'>Order Now</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;