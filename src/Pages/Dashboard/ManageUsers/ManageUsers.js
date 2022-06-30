import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const ManageUsers = () => {
    const [user, loading] = useAuthState(auth);
    const [deletingUser, setDeletingUser] = useState(null);

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    const navigate = useNavigate();

    

    // Delete Modal
    const [deleteModalShow, setDeleteModalShow] = useState(false);

    // Delete Modal Show and Hide Handlers
    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleDeleteModalShow = () => setDeleteModalShow(true);

    const openDeleteModal = user => {
        setDeletingUser(user);
        handleDeleteModalShow();
    }

    const {data: users, isLoading, refetch} = useQuery('user', () => fetch('https://whispering-bastion-88896.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))

    const makeAdmin = (user) => {
        fetch(`https://whispering-bastion-88896.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            if(res.status === 403) {
                toast.error('You have no access to make an admin');
            } else {
                return res.json()
            }
        })
        .then(data => {
            if(data.modifiedCount) {
                toast.success(`${user.email} is now an Admin.`)
                refetch();
            }
        })
    }

    // Loading
    if(loading || adminLoading) {
        return <Loading />
    }

    if(!admin) {
        signOut(auth);
        navigate('/login');
    }

    const deleteUser = id => {
        fetch(`https://whispering-bastion-88896.herokuapp.com/users/${id}`, {
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
            
            handleDeleteModalClose();
            
    }

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h6 className='fw-bold my-4'>Manage Users :</h6>
            <div className='table-wrapper'>
                <Table bordered className=' w-100' >
                    <thead>
                        <tr>
                        <th>User Email</th>
                        <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 
                                    <div className='text-end'>
                                        <button onClick={() => openDeleteModal(user)} className='btn btn-danger'>Delete</button>
                                    </div>
                                    :
                                    <div className='d-flex justify-content-end'>
                                        <button onClick={() => makeAdmin(user)} className='btn btn-success me-3'>Make Admin</button>
                                        <button onClick={() => openDeleteModal(user)} className='btn btn-danger'>Delete</button>
                                    </div>
                                    }</td>
                            </tr>) 
                        }
                    </tbody>
                </Table>
            </div>

            {/* Delete Modal */}

            <Modal show={deleteModalShow} onHide={handleDeleteModalClose} >
                <Modal.Header closeButton>
                <Modal.Title className='text-danger'>Delete Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {deletingUser?.productName}?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteModalClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deleteUser(deletingUser._id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageUsers;