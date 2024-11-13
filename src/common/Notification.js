import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class Notification extends Component{
    render(){
        return (
            // <p> {this.props.message}</p>
            <p>Item Deleted!</p>
        );
    }
}

Notification.propTypes={
    message: PropTypes.string, //add isRequired
}

export default Notification;


