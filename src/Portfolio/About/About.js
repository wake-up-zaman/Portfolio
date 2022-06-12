import React from 'react';
import about from '../Images/last 4.jpg';
const About = () => {
    const data = [
        {
            title: "",
            desc1: "I am interested in computer and information technology.That is why I chose my undergraduate studies on IT.",
            desc2: "Now I am studying Information And Communication Engineering (ICE) at Bangladesh University Of Professionals.Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine. Coming with well-honed skills in information technology in addition to excellent communication skills.Staying up-to-date on industry trends, advancements and actively seek out new technologies.",
            desc3: "I am a person who is positive about every aspect of life.There are many things I like to do, to see,and to experience.",
            cover: "../Images/about.jpg"
        }
    ]
    return (
        <>
            <section className='about topMargin'>

                {
                    data.map((val) => {
                        return (
                            <div className='container flex'>
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
                                    <p>{val.desc1}</p>
                                    <p>{val.desc2}</p>
                                    <p>{val.desc3}</p>
                                    <button className='primary-btn3 primary-btn4'>Hire Me</button>
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