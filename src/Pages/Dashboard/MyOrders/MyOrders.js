import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    

    // User Email
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user]);
    

    // Loading
    if(loading) {
        return <Loading />;
    }

    return (
        <div>
            <h5>My Orders</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>User Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        orders?.map(order => <tr key={order._id}>
                            <td>{order.productName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.userEmail}</td>
                            <td><button>Ship</button></td>
                        </tr>) 
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;