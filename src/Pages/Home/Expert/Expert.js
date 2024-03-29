import React from 'react';

const Expert = ({expert}) => {
    const { name, img, expertize } = expert;
    return (
        <div className='col-lg-4 col-md-6'>
            <img className='img-fluid rounded' src={img} alt="" />
            <h2>{name}</h2>
            <h5 className='text-danger'>{expertize}</h5>
        </div>
    );
};

export default Expert;