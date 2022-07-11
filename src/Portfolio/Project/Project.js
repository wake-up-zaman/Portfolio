import React, { useEffect, useState } from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IosShareIcon from '@mui/icons-material/IosShare';
import Pro from './Pro';
import { useParams } from 'react-router-dom';
const Project = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('https://agile-reef-86659.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProject(data));
    }, [])
    return (
        <>
            <section className='work mt-4'>
                <div className='heading p-4'>
                    <h3 className='fs-4 mt-4'>My Works</h3>
                    <h1>Some of My Completed Projects</h1>
                </div>
                <div id='services' className='container-project'>
                <div className='row1'>
                    <div className='services-container'>
                        {
                            project.map(pro => <Pro
                                key={pro.id}
                                pro={pro}
                            ></Pro>)
                        }
                    </div>
                </div>

            </div>

            </section>
        </>
    );
};

export default Project;