import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteOrderModal = ({deletingOrder, setDeletingOrder}) => {
    


    return (

        <div className='p-5'>
            <h2>{deletingOrder?.productName}</h2>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-info'>Cancle</button>

        </div>
    //     <Modal >
    //         <Modal.Header closeButton>
    //         <Modal.Title>{deletingOrder?.productName}</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //         <Modal.Footer>
    //         <Button variant="secondary">
    //             Close
    //         </Button>
    //         <Button variant="primary">
    //             Save Changes
    //         </Button>
    //         </Modal.Footer>
    //   </Modal>
    );
};

export default DeleteOrderModal;