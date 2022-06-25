import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    // React Hook Form handler
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
    }

    // Loading
    if(loading || gLoading) {
        return <Loading />
    }

    // Error
    let registerError;

    if(error || gError) {
        registerError = <small className='text-danger'>{error?.message || gError?.message}</small>
    }
    
    // User
    if(user || gUser) {
        navigate('/');
    }

    return (
        <div>
            <Container>
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit(onSubmit)} className='form mx-auto mt-5 p-4'>
                        <h4 className='text-center fw-bold'>Register</h4>

                        <input type='text' className='w-100 p-2 rounded my-2' placeholder='Your Name' {...register("name", {required: true})} />
                        {errors.name && <span className='text-danger'>Email is required</span>}
                        
                        <input type='email' className='w-100 p-2 rounded my-2' placeholder='Email Address' {...register("email", {required: true})} />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                        
                        <input type='password' className='w-100 p-2 rounded my-2' placeholder='Password' {...register("password", { required: true })} />
                        {errors.password && <span className='text-danger'>Password is required</span>}
                        
                        {/* Error Message */}
                        {registerError}

                        <input className='w-100 p-2 rounded primary-btn my-2 border-0' type="submit" value='Register' />
                        
                        <p className='mt-3'>Already have an account? <Link to={'/login'}>Login</Link> </p>

                        <p className="divider text-center">OR</p>

                        <button onClick={() => signInWithGoogle()} className='primary-btn p-2 w-100'>Continue with <i className="bi bi-google"></i></button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Register;