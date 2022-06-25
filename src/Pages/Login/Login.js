import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Issue a Token
    const [token] = useToken(user || gUser);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // React Hook Form Handler
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    }

    useEffect(() => {
        if(token) {
            navigate(from, {replace: true});
        }
    }, [token, from, navigate]);

    // Loading
    if(loading || gLoading) {
        return <Loading />
    }

    // Error
    let loginError;
    if(error || gError) {
        loginError = <small className='text-danger'>{error?.message || gError?.message}</small>
    }

    return (
        <div>
            <Container>
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit(onSubmit)} className='form mx-auto mt-5 p-4'>
                        <h4 className='text-center fw-bold'>Login</h4>

                        <input type='email' className='w-100 p-2 rounded my-2' placeholder='Email Address' {...register("email", {required: true})} />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                        
                        <input type='password' className='w-100 p-2 rounded my-2' placeholder='Password' {...register("password", { required: true })} />
                        {errors.password && <span className='text-danger'>Password is required</span>}
                        
                        {/* Error Message */}
                        {loginError}

                        <input className='w-100 p-2 rounded primary-btn my-2 border-0' type="submit" value='Login' />
                        
                        <p className='mt-3'>Don't have any account? <Link to={'/register'}>Register</Link> </p>

                        <p className="divider text-center">OR</p>

                        <button onClick={() => signInWithGoogle()} className='primary-btn p-2 w-100'>Continue with <i className="bi bi-google"></i></button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;