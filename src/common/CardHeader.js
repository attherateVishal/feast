
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css'

class CardHeader extends Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }

  export default CardHeader;