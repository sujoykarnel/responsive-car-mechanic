import React from 'react';

const notFound = 'https://i.ibb.co/ssBWKdn/not-found.png';

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;