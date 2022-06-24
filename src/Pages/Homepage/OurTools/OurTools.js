import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import './OurTools.css';
import Product from './Product/Product';

const Tools = () => {
    const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()));
    
    if(isLoading) {
        return <Loading />
    }
    
    return (
        <section className='section tools-section' id='tools'>
            <Container>
                <h2 className='section-title'>Our Tools</h2>
                <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                    {
                        products.map(product => <Product key={product._id} product={product} />)}
                </Row>
            </Container>
        </section>
    );
};

export default Tools;