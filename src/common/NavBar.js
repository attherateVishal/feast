import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Common.css'
import {Logo} from '../common/';
import navProfileIcon from '../assets/nav-profile-icon.svg';
import blackSearchIcon from '../assets/black-search-icon.svg';
import homeIcon from '../assets/home-icon.svg';

const footerStyle = {
    backgroundColor: "purple",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "60",
    height: "60px",
    width: "100%",
  };

  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };


class NavBar extends Component{
    handleSearchClick = ()=>{
        this.props.history.push('/restaurant')
      }
      handleSettingsClick = ()=>{
        this.props.history.push('/settings')
      }


    render(){
        return (
            <div className="nav-bar">
               <span to={`/settings`} onClick={this.handleSettingsClick}>
                   <Logo src={navProfileIcon}
                       alt="User Profile"/>
               </span>
               <span to={`/search`} onClick={this.handleSearchClick}>
                   <Logo src={homeIcon}
                       alt="Home Page"/>
               </span>
               <span to={`/search`} onClick={this.handleSearchClick}>
               <Logo src={blackSearchIcon}
                       alt="Discover Now"/>
               </span>
            </div>
        );
    }
}

export default NavBar;
