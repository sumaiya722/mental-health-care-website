import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;