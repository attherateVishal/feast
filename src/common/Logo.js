import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class Logo extends Component{
    render(){
        return (
            <div>
             <a href={this.props.href}>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    style={this.props.style}
                    className={this.props.className}/>
             </a>
            </div>
        );
    }
}

export default Logo;

Logo.propTypes={
    src:PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string,
    style:PropTypes.object,
    className:PropTypes.string,
}
