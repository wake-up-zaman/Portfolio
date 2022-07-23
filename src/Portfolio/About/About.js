import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about from '../Images/last 4.jpg';
const About = () => {
    const data = [
        {
            title: "",
            desc1: "I have recently graduated from Bangladesh University of Professionals with a BSc in Information & Communication Engineering. While there, I learned a lot of theory in subjects like data structure and  algorithm,  system design and analysis, web technologies and more.",
            desc2: "In the last 6 month I have been trying to gather practical knowledge of programming and prepare myself for entering the software industry. I am learning MERN stack and finished some full stack projects.",
            desc3: "While I don’t have any real-life work experience, I’ve had a lot of exposure to web development. Now, I’m looking to leverage everything I’ve learned in varsity and get some hands-on work experience. I want to become a successful Web Developer and help the organization where I will work.I am a person who is positive about every aspect of life.",
            cover: "../Images/about.jpg"
        }
    ]
    return (
        <>
            <section className='about topMargin' id='about2'>

                {
                    data.map((val) => {
                        return (
                            <div className='container container-about flex'>
                                <div className='right'>
                                    <div >
                                        <img className='about-img' src={about} alt="" />
                                    </div>
                                </div>
                                <div className='left mtop'>
                                    <div className='heading'>
                                        <h3 className='fs-4 text-center'>About Me</h3>
                                        <h1>{val.title}</h1>
                                    </div>
                                    <p className='des1'>{val.desc1}</p>
                                    <p className='des2'>{val.desc2}</p>
                                    <p className='des3'>{val.desc3}</p>
                      
                                    
                                    <HashLink className='primary-btn3 primary-btn4 button-about' smooth to='#contact'>Hire Me
                                        </HashLink>

                                </div>

                            </div>
                        )

                    })
                }



            </section>
        </>
    );
};

export default About;