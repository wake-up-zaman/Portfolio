import React from 'react';

const Branding = () => {
    const data=[

        {
            id: '01',
            heading: 'Mission',
            desc: 'LeaderShip is an important skill for many positions. Depending on the specific job, it might involve creating formal agreements'
        },
        {
            id: '02',
            heading: 'Vision',
            desc: 'Teamwork is an important skill for many positions. Depending on the specific job, it might involve creating formal agreements'
        },
        {
            id: '03',
            heading: 'Life Goal',
            desc: 'Negotiation is an important skill for many positions. Depending on the specific job, it might involve creating formal agreements'
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