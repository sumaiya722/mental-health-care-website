import React from 'react';
import doctor1 from '../../../images/doctor/images (1).jfif';
import doctor2 from '../../../images/doctor/images (2).jfif';
import doctor3 from '../../../images/doctor/images (3).jfif';
import doctor4 from '../../../images/doctor/download.jfif';
import doctor5 from '../../../images/doctor/images.jfif';
import Doctor from '../Doctor/Doctor';
const doctors = [
    {
        img: doctor1,
        name: 'Alia',
        expert: 'Psychiatric Specialist'
    },
    {
        img: doctor2,
        name: 'Dalia',
        expert: 'Therapist Specialist'
    },
    {
        img: doctor3,
        name: 'Komola',
        expert: 'Councelling Specialist'
    },
    {
        img: doctor4,
        name: 'Abul',
        expert: 'Councelling Specialist'
    },
    {
        img: doctor5,
        name: 'Khushi',
        expert: 'Psychiatric Specialist'
    }

]

const Doctors = () => {
    return (
        <div id="doctors" className="container">
            <h2 className="text-primary mt-3">Our Doctor</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;