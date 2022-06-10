import React from 'react';
import service1 from '../Images/Services/services-1.jpg'
import service2 from '../Images/Services/services-2.jpg'
import service3 from '../Images/Services/services-3.jpg'

const Services = () => {
    const ServicesData=[
        {
            id:1,
            title:"Front End Development",
            cover:"https://twenty-tech.com/wp-content/uploads/2018/12/Front-end-developemtn-1.png",
            desc:"UX design is focused on anything that affects the user's journey to solve that problem, positive or negative, both on-screen and off. UI design is focused on how the product's surfaces look and function. The user interface is only piece of that journey."
        },
        {
            id:2,
            title:"Back End Development",
            cover:"https://i.ibb.co/fMjVg9q/back-end-development3.jpg",
            desc:"Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web application"
        },
        {
            id:3,
            title:"Full Stack Development",
            cover:"https://4.bp.blogspot.com/-6EYNfnD6AS4/XDA4p5bzKGI/AAAAAAAAM3U/0Y2xLS4m0ZE7hSvXDTbUgK5KDQ_XTJpiACLcBGAs/w1200-h630-p-k-no-nu/full%2Bstack%2Bdevelopment%2Bframeworks.jpeg",
            desc:"Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web application"
        }
    ]
    return (
        <>
            <section className='services topMargin'>
                <div className="heading">
                    <h1>MY SERVICES</h1>
                </div>
                <div className='contain grid topMargin service-body'>
                    {ServicesData.map((val)=>{
                        return (
                            <>
                            <div className=''>
                                <div className=''>
                                    <img className='service-img' src={val.cover} alt=''/>
                                </div>
                                <div className='text'>
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default Services;