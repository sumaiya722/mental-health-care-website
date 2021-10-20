import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, img, expert } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <h5 >Specialist: <span className="text-danger">{expert}</span></h5>
        </div>
    );
};

export default Doctor;