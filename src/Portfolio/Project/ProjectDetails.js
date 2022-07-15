import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation } from "swiper";
const ProjectDetails = () => {
    const { _id } = useParams();
    console.log(_id);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://agile-reef-86659.herokuapp.com/projects/${_id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='details'>
            <h2 className='text-center mb-4'>{item.name}</h2>
            <div className='swiper2'>
                <div className='mySwiperNew'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide><img src={item.img1} alt=''></img></SwiperSlide>
                        <SwiperSlide><img src={item.img2} alt=''></img></SwiperSlide>
                        <SwiperSlide><img src={item.img3} alt=''></img></SwiperSlide>
                        <SwiperSlide><img src={item.img4} alt=''></img></SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div className='w-75 mx-auto'>
                <div className='text-center'>
                    <h2 className='mb-4 mt-4'>Features</h2>
                </div>
                <div className='features'>

                    <p className='text-dark'><FaAngleRight className='mr-4' />{item.des1}</p>
                    <p className='text-dark'><FaAngleRight className='mr-4' />{item.des2}</p>
                    <p className='text-dark'><FaAngleRight className='mr-4' />{item.des3}</p>
                    {/* <p className='text-light'><FaAngleRight className='mr-4' />{item.des4}</p>
                    <p className='text-light'><FaAngleRight className='mr-4' />{item.des5}</p> */}
                </div>
            </div>
            <div className='w-100 mx-auto rounded'>
                <div className='text-center'>
                    <h2 className='mb-4 mt-4'>Used Technology</h2>
                </div>
                <div className='features2 p-4'>
                    <div className='d-flex'>
                        {item.tech1 && <p className='single tech p-2 bd-highlight rounded me-2 w-50'>{item.tech1}</p>}
                        {item.tech2 && <p className='single tech p-2 bd-highlight rounded me-2 w-50'>{item.tech2}</p>}
                    </div>
                    <div className='d-flex'>
                        {item.tech3 && <p className='single tech p-2 bd-highlight rounded me-2 w-50'>{item.tech3}</p>}
                        {item.tech4 && <p className='single tech p-2 bd-highlight rounded me-2 w-50'>{item.tech4}</p>}
                    </div>
                    <div className='d-flex'>
                        {item.tech5 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech5}</p>}
                        {item.tech6 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech6}</p>}
                    </div>
                    <div className='d-flex'>
                        {item.tech7 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech7}</p>}
                        {item.tech8 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech8}</p>}
                    </div>
                    <div className='d-flex'>

                    </div>
                    <div className='d-flex'>
                        {item.tech9 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech9}</p>}
                        {item.tech10 && <p className='single tech p-2 bd-highlight rounded me-2 w-50'>{item.tech10}</p>}
                    </div>
                    <div className='d-flex'>
                        {item.tech11 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech11}</p>}
                        {item.tech12 && <p className='single tech p-2 bd-highlight  rounded me-2 w-50'>{item.tech12}</p>}
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;