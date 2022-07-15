import React from 'react';
import banner from '../Images/banner.png';
import './Home.css';
import {FiDownload} from "react-icons/fi";
import pdf from '../Images/Md_Hadiuzzaman_Front_End_Engineer_Resume.pdf'

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container flex'>
                    <div className='right topMargin'>
                        <h1>
                            I AM A <br />
                            Front End Engineer
                        </h1>
                        <div className='socialIcon'>
                            <i className='fab fa-linkedin linkedin'></i>
                            <i className='fab fa-github github'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                            <i className='fab fa-instagram instagram'></i>
                            <i className='fab fa-twitter twitter'></i>
                        </div>
                        <p className='des1'>Seeking for a Junior Front-End Engineer position in a fast-growing organization to utilize expertise in web application development.Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine. Coming with well-honed skills in information technology in addition to excellent communication skills.Staying up-to-date on industry trends, advancements and actively seek out new technologies.</p>
                        <a href={pdf} download className='primary-btn1 primary-btn2'>Download Resume
                        <FiDownload className='down'/></a>
                    </div>
                    <div className='left'>
                        <div className='img'>
                            <img className='banner' src={banner} alt=''></img>
                        </div>
                    </div>      
                </div>
            </section>
        </>
    );
};

export default Home;