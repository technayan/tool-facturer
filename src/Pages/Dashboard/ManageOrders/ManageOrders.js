import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../../../hooks/useAdmin';

const ManageOrders = () => {
    const [user, loading] = useAuthState(auth);

    const [deletingOrderAdmin, setDeletingOrderAdmin] = useState(null);

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    // Delete Modal
    const [deleteModalAdminShow, setDeleteModalAdminShow] = useState(false);

    // Modal Show and Hide Handlers
    const handleModalClose = () => setDeleteModalAdminShow(false);
    const handleModalShow = () => setDeleteModalAdminShow(true);

    const navigate = useNavigate();
    

    const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch(`http://localhost:5000/orders`, {
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


    const openDeleteOrderModal = order => {
        setDeletingOrderAdmin(order);
        handleModalShow();
    }

    // Shipped Order
    const shippedOrder = (order) => {
        fetch(`http://localhost:5000/orders/${order._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                toast.success(`${order.productName} order is shipped.`)
                refetch();
            }
        })
    }

    const deleteOrderAdmin = id => {
        fetch(`http://localhost:5000/orders/admin/${id}`, {
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
            refetch();
            handleModalClose();
            
    }
    
    // Loading
    if(loading || isLoading || adminLoading) {
        return <Loading />;
    }

    // Check Admin
    if(!admin) {
        signOut(auth);
        navigate('/login');
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
                    <th>Use Email</th>
                    <th>Transaction Id</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <tr key={order._id} className={`${order.status === 'Shipped' ? 'table-success' : order.status === 'Unpaid' ? 'table-danger' : 'table-primary'}`}>
                            <td className='w-100'>{order.productName}</td>
                            <td className='w-100'>{order.orderQuantity} pcs.</td>
                            <td className='w-100'>${order.totalPrice}</td>
                            <td className='w-100'>{order.userEmail}</td>
                            <td className='w-100'>{order.transactionId ? order.transactionId : 'N/A'}</td>
                            <td className={`w-100 ${order.status === 'Shipped' ? 'text-success' : order.status === 'Unpaid' ? 'text-danger' : 'text-primary'}`}>
                                {
                                    order.status === 'Paid' ? 'Pending' : order.status 
                                }
                            </td>
                            <td className='w-100'>
                                    {
                                        order.status === 'Paid' && <button onClick={() => shippedOrder(order)} className='btn btn-sm btn-success me-3'>Shipped</button>
                                    }
                                    {
                                        order.status === 'Unpaid' && <button onClick={() => openDeleteOrderModal(order)} className='btn btn-sm btn-danger'>Delete</button>
                                    }
                            </td>
                        </tr>) 
                    }
                </tbody>
            </Table>
            </div>
            {
                !orders && <p>You have no order to show.</p>
            }

           {/* Modal */}

            <Modal show={deleteModalAdminShow} onHide={handleModalClose} >
                <Modal.Header closeButton>
                <Modal.Title className='text-danger'>Delete Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {deletingOrderAdmin?.productName}?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteOrderAdmin(deletingOrderAdmin._id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageOrders;