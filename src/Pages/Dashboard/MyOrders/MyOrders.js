import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../../../hooks/useAdmin';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const [deletingOrder, setDeletingOrder] = useState(null);

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    // Modal
    const [modalShow, setModalShow] = useState(false);

    // Modal Show and Hide Handlers
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    const navigate = useNavigate();
    
    // User Email
    const email = user.email;

    const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch(`https://whispering-bastion-88896.herokuapp.com/orders/${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken');
                signOut(auth);
                navigate('/login');
            } else {
                return res.json()
            }}))

    const openDeleteModal = order => {
        setDeletingOrder(order);
        handleModalShow();
    }

    const deleteOrder = id => {
        fetch(`https://whispering-bastion-88896.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount) {
                    toast.success('Deleted Successfully!');
                    refetch();
                }
            })
            handleModalClose();
            
    }
    
    // Loading
    if(loading || isLoading || adminLoading) {
        return <Loading />;
    }

    // Check Admin
    if(admin) {
        navigate('/dashboard');
    }

    return (
        <div>
            <h6 className='fw-bold my-4'>My Orders :</h6>
            <div className='table-wrapper'>
            <Table bordered className=' w-100' >
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Transaction Id</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <tr key={order._id} className={`${order.status === 'Shipped' ? 'table-success' : order.status === 'Unpaid' ? 'table-danger' : 'table-primary'}`}>
                            <td>{order.productName}</td>
                            <td>{order.orderQuantity} pcs.</td>
                            <td>${order.totalPrice}</td>
                            <td>{order.transactionId ? order.transactionId : 'N/A'}</td>
                            <td className={`${order.status === 'Shipped' ? 'text-success' : order.status === 'Unpaid' ? 'text-danger' : 'text-primary'}`}>{order.status}</td>
                            <td>{order.status === 'Unpaid' && 
                                <div className='d-flex'>
                                    <Link to={`/dashboard/payment/${order._id}`} className='btn btn-success me-5'>Pay</Link>
                                    <button onClick={() => openDeleteModal(order)} className='btn btn-danger'>Delete</button>
                                </div>
                                }</td>
                        </tr>) 
                    }
                </tbody>
            </Table>
            </div>
            {
                !orders && <p>You have no order to show.</p>
            }

           {/* Modal */}

            <Modal show={modalShow} onHide={handleModalClose} >
                <Modal.Header closeButton>
                <Modal.Title className='text-danger'>Delete Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {deletingOrder?.productName}?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteOrder(deletingOrder._id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
            
           
        </div>
    );
};

export default MyOrders;