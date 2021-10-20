import React from 'react';
import pic from '../../../images/doctor/images.jfif'
import './About.css'

const About = () => {
    return (
        <div id="about" className="about mb-4 mt-5">
            <div className="about-title">
                <h1>About Us</h1>
                <h1>WHY <span className="tag">CHOOSE</span> US</h1>
                <h2>25+ Years of Experience in Human Resource Management</h2>
                <h2 className="about-text">We make sure that One can gain <span className="must">Self Confiden</span> to refresh his/her mind</h2>
                <h4 className="about-text1">Good health is central to handling stress and living a longer, more active life. In this article, we explain the meaning of good health, the types of health a person needs to consider, and how to preserve good health.

                    They base this definition on the idea that the past few decades have seen modern science take significant strides in the awareness of diseases by understanding how they work, discovering new ways to slow or stop them, and acknowledging that an absence of pathology may not be possible.</h4>
                <h1>We Also Ensure your <span className="must">Sefty & Care of your Mental Health</span></h1>
            </div>
            <div>
                <img src={pic} alt="" />
            </div>
        </div>
    );
};

export default About;