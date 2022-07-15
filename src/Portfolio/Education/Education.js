import React from 'react';
import '../../App.css'
const Education = () => {
    return (
        <section className='education'>
            <h2 className='heading1'>MY <span>EDUCATION</span></h2>
            <div className='box-container1'>
                <div className='box'>
                    <i className='fas fa-graduation-cap'></i>
                    <span>2018-2021</span>
                    <p className='institute-name'>Bangladesh University of Professionals</p>
                    <p className='degree'>BSc in Information And Communication Engineering</p>
                    <p className='degree'>CGPA: 3.25 Out of 4.00</p>
                    <p className='degree'>Club Activities: IEEE BUP Student Branch</p>
                </div>
                <div className='box'>
                    <i className='fas fa-graduation-cap'></i>
                    <span>2014-2016</span>
                    <p className='institute-name'>Cantonment Public School And College,Rangpur</p>
                    <p className='degree'>Higher Secondary Certificate in Science</p>

                    <p className='degree'>GPA: 5.00 Out of 5.00</p>
                    <p className='degree'>Club Activities: Bangladesh National Cadet Corps</p>
                </div>
                <div className='box'>
                    <i className='fas fa-graduation-cap'></i>
                    <span>2012-2014</span>
                    <p className='institute-name'>Pirganj Government High School</p>
                    <p className='degree'>Secondary School Certificate in Science</p>

                    <p className='degree'>GPA: 5.00 Out of 5.00</p>
                    <p className='degree'>Club Activities: N/A</p>
                </div>
            </div>
        </section>
    );
};

export default Education;