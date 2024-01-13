import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const { user, SignInUsingGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = () => {
        SignInUsingGoogle();
        navigate(location?.state?.prevUrl ? location?.state?.prevUrl : '/home');
    }
    return (
        <div>
            <Button onClick={handleSignIn} className='btn btn-warning'>Sign in Google</Button>
        </div>
    );
};

export default Login;