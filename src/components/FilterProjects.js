import React from 'react';
import ProjectComponent from './ProjectComponent';

import projectsData from '../projectsData';

function FilterProjects(props){
    if(props.webDev){
        const projects = projectsData
        .filter(project => project.class === 'web-dev')
        .map(project => <ProjectComponent 
            key={project.id}
            class={project.class}
            title={project.title}
            imgLarge={project.imgLarge}
            imgMedium={project.imgMedium}
            imgSmall={project.imgSmall}
            imgAlt={project.imgAlt}
            link={project.link}
            isExternal={project.isExternal}
        />)
        return(
            <div>{projects}</div>
        )
    }
    else{
        const projects = projectsData
        .filter(project => project.class === 'ui-ux')
        .map(project => <ProjectComponent 
            key={project.id}
            class={project.class}
            title={project.title}
            imgLarge={project.imgLarge}
            imgMedium={project.imgMedium}
            imgSmall={project.imgSmall}
            imgAlt={project.imgAlt}
            link={project.link}
            isExternal={project.isExternal}
        />)
        return(
            <div>{projects}</div>
        )
    }
}

export default FilterProjects;