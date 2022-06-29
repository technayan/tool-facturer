import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    // Image Storage Key
    const imgStorageKey = '32d9511c06c10e1c35c583ed7f8b6cbe';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success) {
                const img = imgData.data.url;
                const product = {
                    name : data.name,
                    description: data.description,
                    price: parseInt(data.price),
                    availableQnt: parseInt(data.availableQnt),
                    minOrderQnt: parseInt(data.minOrderQnt),
                    imageUrl: img
                }

                // Send Product Info to the Database through Backend
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.insertedId) {
                        toast.success('Product added successfully!');
                        reset();
                    } else {
                        toast.error('Failed to add product. Try again!')
                    }
                })
            }
        })
    };


    // Loading 
    if (loading || adminLoading) {
        return <Loading />
    }

    // Check Admin
    if(!admin) {
        signOut(auth);
        navigate('/login');
    }

    return (
        <div>
            <h6 className='fw-bold my-4'>Add A Product :</h6>

            <form onSubmit={handleSubmit(onSubmit)} className='review-form mx-auto mt-5 p-4'>
                <h4 className='text-center fw-bold'>Product Details</h4>
                
                <input type='text' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2 text-capitalize' placeholder='Product Name' {...register("name", {required: {value: true, message: 'Name is required'}})} />
                {errors.name?.type === 'required' && <span className='text-danger d-block'>{errors.name.message}</span>}
            
                <textarea className='w-100 p-2 rounded my-2' rows='5' placeholder='Product Description' {...register("description", { required: {value: true, message: 'Review is required'}, minLength:{value: 150, message: 'Minimum 150 characters'}})} />
                {errors.description?.type === 'required' && <span className='text-danger d-block'>{errors.description.message}</span>}
                {errors.description?.type === 'minLength' && <span className='text-danger d-block'>{errors.description.message}</span>}

                <div className="d-md-flex">
                    <div className='me-md-1'>
                    <input type='number' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2 ' placeholder='Product Price / unit' {...register("price", {required: {value: true, message: 'Price is required'}})} />
                    {errors.price?.type === 'required' && <span className='text-danger d-block'>{errors.price.message}</span>}</div>
                    <div className='mx-md-1'>
                    <input type='number' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' placeholder='Available Quantity' {...register("availableQnt", {required: {value: true, message: 'Available Qnty is required'}})} />
                    {errors.availableQnt?.type === 'required' && <span className='text-danger d-block'>{errors.availableQnt.message}</span>}</div>
                    <div className='ms-md-1'>
                    <input type='number' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' placeholder='Min, Order Quantity' {...register("minOrderQnt", {required: {value: true, message: 'Min. Order Qnty is required'}})} />
                    {errors.minOrderQnt?.type === 'required' && <span className='text-danger d-block'>{errors.minOrderQnt.message}</span>}</div>
                    
                </div>
                
                <label htmlFor="product-img">Product Image :</label>
                <input type='file' id='product-img' className='w-100 w-lg-50 me-lg-2 py-4 px-2 rounded my-2' placeholder='Minimum Order Quantity' {...register("image", {required: {value: true, message: 'Product Image is required'}})} />
                {errors.image?.type === 'required' && <span className='text-danger d-block'>{errors.image.message}</span>}

                <input className='d-block mx-auto px-5 py-2 rounded primary-btn mt-3 mb-2 border-0' type="submit" value='Add Product' />
                
            </form>
        </div>
    );
};

export default AddProduct;