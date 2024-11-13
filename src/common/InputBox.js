import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class InputBox extends Component{
    render(){
        return (
            <input type={this.props.type}value={this.props.value} onChange={this.props.onChange} />
        );
    }
}

export default InputBox;

InputBox.propTypes={
    value:PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'tel', 'password']).isRequired,
    onChange: PropTypes.func.isRequired
}


