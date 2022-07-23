import React from 'react';
import html from '../Images/Skills/html-5.png'
import css from '../Images/Skills/css-3.png'
import bootstrap from '../Images/Skills/bootstrap.png'
import javascript from '../Images/Skills/js.png'
import c from '../Images/Skills/c-.png'
import java from '../Images/Skills/java.png'
import python from '../Images/Skills/python.png'
import node from '../Images/Skills/nodejs.png'
import mysql from '../Images/Skills/mysql.png'
import mongo from '../Images/Skills/mongo.png'
import react from '../Images/Skills/react.png'
import tail from '../Images/Skills/tailwind.jpg'
import express from '../Images/Skills/express2.png'


const Skills = () => {
    return (
        <div className='skill' id='skills'>


        <div class='inner'>
        <div className="header2">
                    <h2 className='text-center'>MY SKILLS</h2>
                </div>
            <div class='container2'>
            <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={c} alt='' className='skill-icon'/>
                    </div>
                    <h3>C++</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={python} alt='' className='skill-icon'/>
                    </div>
                    <h3>Python</h3>
                    </div>
                    <p className='level'>Comfortable</p>
                </div>

                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={java} alt='' className='skill-icon'/>
                    </div>
                    <h3>Java</h3>
                   
                    </div>
                    <p className='level'>Familiar</p>
                </div>

                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={javascript} alt='' className='skill-icon'/>
                    </div>
                    <h3>JavaScript</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>
                {/* <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={html} alt='' className='skill-icon'/>
                    </div>
                    <h3>HTML5</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={css} alt='' className='skill-icon'/>
                    </div>
                    <h3>CSS3</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div> */}
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={bootstrap} alt='' className='skill-icon'/>
                    </div>
                    <h3>BootStrap</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={tail} alt='' className='skill-icon'/>
                    </div>
                    <h3>Tailwind CSS</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>

                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={react} alt='' className='skill-icon'/>
                    </div>
                    <h3>React</h3>
                   
                    </div>
                    <p className='level'>Expert</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={node} alt='' className='skill-icon'/>
                    </div>
                    <h3>Node</h3>
                   
                    </div>
                    <p className='level'>Comfortable</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={express} alt='' className='skill-icon'/>
                    </div>
                    <h3>Express</h3>
                   
                    </div>
                    <p className='level'>Comfortable</p>
                </div>
                <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={mongo} alt='' className='skill-icon'/>
                    </div>
                    <h3>MongoDB</h3>
                   
                    </div>
                    <p className='level'>Comfortable</p>
                </div>
                {/* <div class='skill-box'>
                    <div class='skill-title'>
                    <div class='skill-img'>
                        <img src={mysql} alt='' className='skill-icon'/>
                    </div>
                    <h3>My SQL</h3>
                   
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt debitis nesciunt!</p>
                </div> */}

               
            </div>
        </div>
        </div>
    );
};

export default Skills;