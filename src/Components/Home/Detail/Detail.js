import React from 'react';
import doctor from '../../../images/doctor/images (1).jfif';

const Detail = () => {
    return (
        <div className="detail">
            <img src={doctor} alt="" />

            <h5 className="px-5 pb-2"> Self-help and support groups can help you gain insight into your condition. They can provide friendships, support, resources, and tips on how to live with your condition. They also help address the feelings of isolation that often go along with mental health conditions.</h5>
            <p className="px-5">There are many types of therapies people use to help treat mental health problems. These can include physical activity, such as exercise or yoga. They can also include creative therapies. These are therapies done using means of expressing yourself creatively. They can include using art, music, movement, or writing.</p>
            <h2>We Concern Your <span className="text-danger"> Happines</span> .You are most <span className="text-danger"> Important</span> for us</h2>
            <h3>Always Stay <span className="text-danger">Happy</span>. Keep your Mind <span className="text-danger">Fresh</span>.Keep <span className="text-danger">Smilling</span></h3>
            <h2>Remember You Are<span className="text-danger"> Special</span></h2>
            <button className="btn">Keep in Touch</button>
        </div>
    );
};

export default Detail;