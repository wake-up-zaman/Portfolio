import React from 'react';
import banner from '../Images/port4.jpg';
import './Home.css';
const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container flex'>
                    <div className='left'>
                        <div className='img'>
                            <img className='banner' src={banner} alt=''></img>
                        </div>
                    </div>
                    <div className='right topMargin'>
                        <h1>
                            I AM A <br />
                            Front End Engineer
                        </h1>
                        <div className='socialIcon'>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-facebook'></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;