import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                        
                        <input className='w-100 p-2 rounded primary-btn my-2 border-0' type="submit" value='Login' />
                        
                        <p className='mt-3'>Don't have any account? <Link to={'/register'}>Create an account</Link> </p>

                        <p className="divider text-center">OR</p>

                        <button className='primary-btn p-2 w-100'>Continue with <i className="bi bi-google"></i></button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Register;