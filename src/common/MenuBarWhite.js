import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class MenuBarWhite extends Component{
    render(){
        return (
            <div className="open-menu-button">
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    style={this.props.style}
                    className={this.props.className}
                   />
            </div>
        );
    }
}

export default MenuBarWhite;
