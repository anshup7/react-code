import React from 'react';

export const SocialLinks = (props) => {
    console.log(props);
    return (
        <li className="nav-item active">
            <a className="nav-link nav-text" 
            href={props.socialNetwork.link}>
            {props.socialNetwork.name}
            <span 
            className="sr-only">(current)</span>
            </a>
        </li>
    );
}