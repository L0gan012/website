import React from 'react';

import projects from '../Components/Lists/ProjectList.js';
import LongCard from '../Components/ProjectSection/LongCard.js';

const Projects = () => {
    return (
        <div className='page'>
            {projects.map((project, k) => <LongCard key={k} title={project.title} path={project.path} desc={project.description} img={project.cardImg}/>)}
        </div>
    );
};

export default Projects;