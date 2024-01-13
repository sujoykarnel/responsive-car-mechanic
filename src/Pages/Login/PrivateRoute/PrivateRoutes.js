import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = () => {
    const location = useLocation();
    console.log(location);
    
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    };
    
    return (
        user.email?<Outlet/>:<Navigate to="/login" state={{prevUrl: location.pathname}}/>
    );
};

export default PrivateRoutes;