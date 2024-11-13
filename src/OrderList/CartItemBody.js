import React, { Component } from 'react';

class CartItemBody extends Component {

  renderSelectedAddOns = () => {
    const addons = this.props.addons;
    if(addons){
    return (
      <div className="addons-content">         
        <h3>Addons</h3>
        <p>{addons}</p>
      </div>
    );
    }
    else {
      console.log("No options selected for id " + this.props.id);
      return null;
    }
  }
  
  renderSelectedOptions = () => {
    const options= this.props.options;

    if(options){
      return (
        <div className="options-content">         
          <h3>Options</h3>
          <p>{options}</p>
        </div>
      );
    }
    else
    {
      console.log("No options selected for id " + this.props.id );
      return null;
    }
   
  }
  
  renderSpecialInstructions = () => {
    const instructions  = this.props.instructions;

    if(instructions){
      return (
        <div className="special-instructions-content">         
          <h3>Special Instructions</h3>
          <p>{instructions}</p>
        </div>
      );
    }
    else{
      console.log("No instructions given for id " + this.props.id );
      return null;
    }
    
  }
    render() {
      return (
        <div> 
          <h2>{this.props.name}</h2>
            {this.renderSelectedOptions()}
            {this.renderSelectedAddOns()}  
            {this.renderSpecialInstructions()}
            <h3>${this.props.price}</h3>
        </div>
      )
    }
  }

  export default CartItemBody;
