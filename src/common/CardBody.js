import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyBackground from './LazyBackground';
import './Common.css';

class CardBody extends Component {
    render() {
        const { image, taste, title, price, description } = this.props;

       let tasteClassName="card-body-taste-container"

        switch(taste){
            case 'Sweet':
                tasteClassName+=' sweet';
                break;
            case 'Mild':
                tasteClassName+=' mild';
                break;
            case 'Spicy':
                tasteClassName+= ' spicy';
                break;
            case 'Sour':
            tasteClassName+= ' sour';
               break;
            case 'Tangy':
            tasteClassName+= ' tangy';
               break;
            case 'Tart':
            tasteClassName+= ' tart';
               break;
            case 'Salty':
            tasteClassName+= ' salty';
               break;
            case 'Savory':
            tasteClassName+= ' bitter';
               break;
            case 'Bitter':
            tasteClassName+= ' savory';
               break;
            //set className accordingly + add more cases
            default:
               break;
            //don't need a default but keep the default keyword above.
        }


      return (
           <LazyBackground src={image} placholder="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg">
               <h4 className={tasteClassName}><span>{taste}</span></h4>
               <div className="card-body-item-container">
                  <div className="card-body-items color">
                     <h2 className="name ">{title}</h2>
                     <p className="price ">{price}</p>
                  </div>
                 <div>
                     <p className="description color"> {description}</p>
                 </div>
               </div>
            </LazyBackground>
      )
    }
  }

  export default CardBody;
