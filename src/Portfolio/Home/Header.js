import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
import { FaSearch } from "react-icons/fa";
import { MdOutlineWork,MdGridView,MdOutlineClose,MdMenu } from "react-icons/md";
const Header = () => {
    const [sidebar,setSidebar]=useState(false);

    window.addEventListener("scroll",function (){
        const header=document.querySelector(".header");
        header.classList.toggle('active', window.scrollY > 200)
    })
    return (
        <>
            <header className='header'>
                <div className='container flex'>
                    <div className='logo'>
 
                        <h1>Portfolio</h1>
                    </div>
                    <div className='nav'>
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={()=> setSidebar(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/pages'>Pages</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li className='icon'>
                                <FaSearch className='HeaderIcon'/>
                                <MdOutlineWork className='HeaderIcon'/>
                                <MdGridView className='HeaderIcon'/>
                            </li>
                        </ul>
                    </div>
                    <button className='navbar-items-icon' onClick={()=> setSidebar(!sidebar)}>
                        {sidebar ? <MdOutlineClose /> : <MdMenu />}
                    </button>

                </div>

            </header>
        </>
    );
};

export default Header;