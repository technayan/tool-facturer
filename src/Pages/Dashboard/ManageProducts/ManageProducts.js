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

const ManageProducts = () => {
    const [user, loading] = useAuthState(auth);

    const [deletingProduct, setDeletingProduct] = useState(null);

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    // Modal
    const [modalShow, setModalShow] = useState(false);

    // Modal Show and Hide Handlers
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    const navigate = useNavigate();

    const {data: allProducts, isLoading, refetch} = useQuery('allProducts', () => fetch(`http://localhost:5000/products`).then(res => res.json()))

    const openDeleteModal = order => {
        setDeletingProduct(order);
        handleModalShow();
    }

    const deleteProduct = id => {
        fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount) {
                    toast.success('Product deleted Successfully!');
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
                    <th>Price</th>
                    <th>Available Qnty</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts?.map(product => <tr key={product._id} >
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.availableQnt} pcs.</td>
                            <td>
                                <div className='d-flex'>
                                    <button onClick={() => openDeleteModal(product)} className='btn btn-danger'>Delete</button>
                                </div></td>
                        </tr>) 
                    }
                </tbody>
            </Table>
            </div>

           {/* Modal */}

            <Modal show={modalShow} onHide={handleModalClose} >
                <Modal.Header closeButton>
                <Modal.Title className='text-danger'>Delete Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {deletingProduct?.name}?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteProduct(deletingProduct._id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
            
           
        </div>
    );
};

export default ManageProducts;