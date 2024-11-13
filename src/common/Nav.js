import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'
import {Image} from '../common/';
import navProfileIcon from '../assets/nav-profile-icon.svg';
import blackSearchIcon from '../assets/black-search-icon.svg';
import homeIcon from '../assets/home-icon.svg';

class Nav extends Component{
    render(){
        return (
            <div className="nav-bar">
               <Image src={navProfileIcon}
                  alt="User Profile"
                   />
               <Image src={homeIcon}
                  alt="Home Page"
                   />
               <Image src={blackSearchIcon}
                  alt="Discover Now"
                   />
            </div>
        );
    }
}

export default Nav;
