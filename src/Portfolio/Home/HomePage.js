import React from 'react';
import About from '../About/About';
import Branding from '../Branding/Branding';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Home from './Home';

const HomePage = () => {
    return (
        <>
        <Home></Home>
        <Branding></Branding>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Project></Project>
        <Contact></Contact>

        </>
    );
};

export default HomePage;