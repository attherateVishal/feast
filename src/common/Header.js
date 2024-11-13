import React, { Component } from 'react';
import Logo from './Logo';
import back from '../assets/back-icon-black.svg'
import PropTypes from 'prop-types';
import './Common.css';

class Header extends Component{
    render(){
        return (
            <div className="top-bar-container">
               <span onClick={this.props.onClick}>
                   <Logo src={this.props.src} alt="Back Button" className={this.props.className}/>
               </span>
               <div className="top-bar-title">
                  <div>
                     <h1>{this.props.text}</h1>
                  </div>
                  <div style={{paddingLeft: "10px"}}>
                     <h1>{this.props.secondarytext}</h1>
                  </div>
               </div>
            </div>
        );
    }

}

Header.propTypes={
    className: PropTypes.string.isRequired,
    src:PropTypes.string,
    text:PropTypes.string,
    secondarytext:PropTypes.string,
    url: PropTypes.string,
    style:PropTypes.object,
}


export default Header;
