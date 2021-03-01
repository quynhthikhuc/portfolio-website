import React from 'react';
import { Link } from 'react-router-dom';

function ProjectComponent(props){
    if(props.isExternal){
        return(
            <a href={props.link} target="_blank" rel="noreferrer">
                <figure>
                    <img 
                        srcSet={`${props.imgSmall} 350w, ${props.imgMedium} 600w, ${props.imgLarge} 900w`}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        src={props.imgSmall}
                        alt={props.imgAlt}/>
                    <figcaption>{props.title}</figcaption>
                </figure>
            </a>
        )
    }
    else{
        return(
            <Link to={props.link}>
                <figure>
                    <img 
                        srcSet={`${props.imgSmall} 350w, ${props.imgMedium} 600w, ${props.imgLarge} 900w`}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        src={props.imgSmall}
                        alt={props.imgAlt}/>
                    <figcaption>{props.title}</figcaption>
                </figure>
            </Link>
        )
    }
}

export default ProjectComponent;