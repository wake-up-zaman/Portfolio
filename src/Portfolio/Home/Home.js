import React from 'react';
import banner from '../Images/banner.png';
import './Home.css';
import { FiDownload } from "react-icons/fi";
import pdf from '../Images/Md_Hadiuzzaman_Front_End_Engineer_Resume.pdf'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container container-banner flex'>
                    <div className='right topMargin'>
                        <h1 className='title-main-mobile'>
                            <span className='title-mobile'>I AM A </span><br />
                            <span className='title2-mobile text-center'>Junior Software Engineer</span>
                        </h1>
                        <div className='socialIcon'>
                            <a href="https://www.linkedin.com/in/md-hadiuzzaman/">
                            <i className='fab fa-linkedin linkedin'></i>
                            </a>
                            <a href="https://github.com/wake-up-zaman">
                            <i className='fab fa-github github'></i>
                            </a>
                            <a href="https://web.facebook.com/Sajib83.info/">
                            <i className='fab fa-facebook-f facebook'></i>
                            </a>
                            <a href="https://www.instagram.com/wake_up_zaman/">
                            <i className='fab fa-instagram instagram'></i>
                            </a>
                            <a href="https://twitter.com/wake_up_zaman">
                            <i className='fab fa-twitter twitter'></i>
                            </a>
                            
                            
                            
                            
                        </div>
                        <p className='des1-banner des1'>Seeking for a Junior Software Engineer position in a fast-growing organization to utilize expertise in web application development.Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine. Coming with well-honed skills in information technology in addition to excellent communication skills.Staying up-to-date on industry trends, advancements and actively seek out new technologies.</p>
                        <a href={pdf} download className='primary-btn1 primary-btn2 title-button-mobile'>Download Resume<FiDownload className='down' /></a>
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