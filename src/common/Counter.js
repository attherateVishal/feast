import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component {

    constructor() {
        super();

        this.state = {
          count: 0
        }
      }

    incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
      }

      decrementCount = () => {
        if(this.state.count>0){
            this.setState({
                count: this.state.count - 1
              });
        }
        
      }

      render() {
      return (
        <div className="order-list-details-price-container">
          <Button
            name="minus"
            value="-" type="submit"
            className="order-list-details-quantity-edit"
            onClick = {this.decrementCount} />
          <div className="order-list-details-quantity-container">
            <h3>{this.state.count}</h3>
          </div>
          <Button
            name="plus"
            value="+" type="submit"
            className="order-list-details-quantity-edit"
            onClick = {this.incrementCount} />
        </div>
      )
    }
}

export default Counter;



  
  
  