import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { service } = props;
    const { id, img, name, description } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <p className="p-5">{description}</p>
            <Link to={`/detail/${id}`}>
                <button className="btn">Detail{name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;