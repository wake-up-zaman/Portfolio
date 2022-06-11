import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pro = ({pro}) => {
    const {name,img1,des1,_id}=pro;
    const navigate=useNavigate();
    const navigateToCheckOut= _id=>{
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='pro'>
            <img className='w-100 service-img' src={img1} alt='' />
            <h3 className='text-white'>{name}</h3>
            <p><small>{des1}</small></p>
            <button onClick={()=>navigateToCheckOut(_id)} className='btn btn-info text-light'>Details</button>
        </div>
    );
};

export default Pro;