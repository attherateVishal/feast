import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LazyBackground extends Component {
    state = { src: null };
  
    componentDidMount() {
      const { src } = this.props;
  
      const imageLoader = new Image();
      imageLoader.src = src;
  
      imageLoader.onload = () => {
        this.setState({ src });
      };
    }
  
    render() {
      return <div {...this.props} style={{ backgroundImage: `url(${this.state.src || this.props.placeholder})`,
      borderRadius: '5px',
      marginBottom: '10px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      boxShadow:' 0 0 5px -1px rgba(0,0,0,0.47)' }} />;
    }
  }

  export default LazyBackground;