import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const MyProfile = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user, loading] = useAuthState(auth);



    const onSubmit = data => {
        const updatedUser = data;
        updatedUser.userName= user.displayName;
        updatedUser.email= user.email;

        fetch(`https://whispering-bastion-88896.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.result.matchedCount) {
                toast.success('Your profile is updated');
            }
            console.log(data)
        })
    };

    if(loading) {
        return <Loading />
    }


    return (
        <div>
            <h6 className='fw-bold my-4'>My Profile :</h6>

            <form onSubmit={handleSubmit(onSubmit)} className='review-form mx-auto mt-5 p-4'>
                <h4 className='text-center fw-bold'>Profile</h4>
                
                <div className="d-lg-flex">
                <input type='text' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' defaultValue={user.displayName} {...register("userName", {required: true, disabled: true})} />
                
                <input type='email' className='w-100 w-lg-50 ms-lg-2 p-2 rounded my-2' defaultValue={user.email} disabled />
                </div>

                <textarea className='w-100 p-2 rounded my-2' rows='3'  placeholder='Enter Address' {...register("address", {required: {value: true, message: 'Address is required'}})} />
                {errors.address?.type === 'required' && <span className='text-danger d-block'>{errors.address.message}</span>}

                <input type='text' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' placeholder='Phone No.' {...register("phone", {required: {value: true, message: 'Phone No. is required'}})} />
                {errors.phone?.type === 'required' && <span className='text-danger d-block'>{errors.phone.message}</span>}

                <input type='url' className='w-100 w-lg-50 me-lg-2 p-2 rounded my-2' placeholder='Linkedin URL' {...register("linkedin")} />
                

                <input className='d-block mx-auto px-5 py-2 rounded primary-btn mt-4 border-0 ' type="submit" value='Update Profile' />
                
            </form>
        </div>
    );
};

export default MyProfile;