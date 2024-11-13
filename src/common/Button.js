import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class Button extends Component{
    render(){
        return (
            <button className={this.props.className} name={this.props.name} value={this.props.value} type={this.props.type}
             onClick={this.props.onClick}> {this.props.value}
            </button>
        );
    }
}

export default Button;

Button.propTypes={
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}
