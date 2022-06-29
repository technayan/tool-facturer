import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    // useAdmin Hook
    const [admin, adminLoading] = useAdmin(user);

    // Add Review Handler
    const onSubmit = data => {
        const review = data;
        review.userName = user.displayName;
        review.userEmail = user.email;

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Review added successfully!');
                data.value = '';
                reset();
            }
        });
    };


    // Loading 
    if (loading || adminLoading) {
        return <Loading />
    }

    // Check Admin
    if(admin) {
        navigate('/dashboard');
    }

    return (
        <div>
            <h6 className='fw-bold my-4'>Add Review :</h6>

            
            <form onSubmit={handleSubmit(onSubmit)} className='review-form mx-auto mt-5 p-4'>
                <h4 className='text-center fw-bold'>Review</h4>
                
                <div className="d-lg-flex">
                <input type='text' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' defaultValue={user.displayName} {...register("userName", {required: true, disabled: true})} />
                
                <input type='email' className='w-100 w-lg-50 ms-lg-2 p-2 rounded my-2' defaultValue={user.email} {...register("userEmail", {required: true, disabled: true})} />
                </div>

                <textarea className='w-100 p-2 rounded my-2' rows='5' placeholder='Review Message' {...register("review", { required: {value: true, message: 'Review is required'}, minLength:{value: 20, message: 'Minimum 20 characters'}})} />
                {errors.review?.type === 'required' && <span className='text-danger d-block'>{errors.review.message}</span>}
                {errors.review?.type === 'minLength' && <span className='text-danger d-block'>{errors.review.message}</span>}


                <label htmlFor="rating">Rating :</label>
                <select className='w-20 p-2 rounded my-2 ms-2' id='rating' defaultValue={5} {...register("rating")} >
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>

                <input className='d-block mx-auto px-5 py-2 rounded primary-btn my-2 border-0' type="submit" value='Post Review' />
                
            </form>
        </div>
    );
};

export default AddReview;