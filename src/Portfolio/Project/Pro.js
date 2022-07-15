import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Pro = ({ pro }) => {
    const { name, img1, des1, _id } = pro;
    const navigate = useNavigate();
    const navigateToCheckOut = _id => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='card'>
        <div className='imgBx'>
            <img className='w-100' src={img1} alt='' />
        </div>
        <div className='contentBx'>
            <div className='content-project'>
                <h3>{name}</h3>
                <p className=''><small>{des1}</small></p>

                <div className='flex flex-nowrap'>
                <button onClick={()=>navigateToCheckOut(_id)} className='btn btn-info mr-12 text-light'>Details</button>
                <button  className='btn btn-info text-light'><Link to="https://glowing-jalebi-853180.netlify.app/"></Link>Live</button>
                <button  className='btn btn-info text-light'>Client-Side</button>
                <button  className='btn btn-info text-light'>Server-Side</button>
                </div>
            </div>

        </div>
   
   
   
       
    </div>
    );
};

export default Pro;