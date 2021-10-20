import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="title">
                <h1>Follow Us</h1>
                <h4>Phone:+0179845786</h4>
                <h5>Email:keepsmilling123@email.com</h5>
            </div>

            <div className="icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </div>
    );
};

export default Footer;