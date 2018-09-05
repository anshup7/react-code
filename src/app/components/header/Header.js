import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Avatar from '@material-ui/core/Avatar';
import {SocialLinks} from '../HeaderSocial/SocialLinks';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark " >

            <Avatar className="avatar-color"> 
                AU
            </Avatar>

            <a className="navbar-brand nav-text" href="#">{props.name}</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {props.socialNetwork.map((network, index) => <SocialLinks key={index} socialNetwork={network} />)}
                </ul>

            </div>
        </nav>

    );
}

Header.propTypes = {
    name: PropTypes.string,
    socialNetwork: PropTypes.array
};