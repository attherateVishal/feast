import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class Image extends Component{
    render(){
        return (
            <div>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    style={this.props.style}
                    className={this.props.className}
                   />
                {/*TODO: shoudl we Make this a component that displays users name and time of day/weather
                   or can we mke this entire component a unique component used for the search page?
                   or should we make the welcome message a seperate component */}
               <div className="welcome-message">
                  <h1>Hey Kaustubh, its cold as a mf in Chi-town.</h1>
                  <h3>Grab some hot chocolate at REST. NAME!</h3>
               </div>
            </div>
        );
    }
}

export default Image;

Image.propTypes={
    src:PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style:PropTypes.object
}
