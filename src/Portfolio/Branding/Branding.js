import React from 'react';

const Branding = () => {
    const data=[

        {
            id: '01',
            heading: 'Mission',
            desc: 'Establish my skills and knowledge in the corporate world.Depending on the specific job, it might involve creating formal agreements.'
        },
        {
            id: '02',
            heading: 'Vision',
            desc: 'Skilled myself as if well established software company willing to hire me  and get ready to go abroad for higher study.'
        },
        {
            id: '03',
            heading: 'Goals',
            desc: 'Become a Software Engineer and build a Startup.I want to become a successful Web Developer and help the organization where I will work.'
        }
    ]
    return (
        <>
           <section className='branding'>
                <div className='container grid'>
                    {data.map((value)=>{
                        return(
                            <div className='box flex'>
                                <div className='text'>
                                    {/* <h1>{value.id}</h1> */}
                                </div>
                                <div className='para'>
                                    <h2>{value.heading}</h2>
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section> 
        </>
    );
};

export default Branding;