import React from 'react';
import './Service.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, discription, img } = service;
    return (
        <div className='service'>
            <img className='img-fluid rounded' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price {price}</h5>
            <p className='text-justify'>{discription}</p>
            <Link to={ `/booking/${id}`}>
                <Button className='btn btn-success'>Booking {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;