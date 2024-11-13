import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import { Counter } from '../common/';
import CartItemBody from './CartItemBody';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      render:true

    }
  }
  userSwipedLeft =()=>{
    console.log("Swipe to left detected. Item with id-" + this.props.details.id + " will be deleted");

    this.props.removeItem(this.props.details.id);

    // this.setState({
    //   render: false
    // });

    //sending the id to orderlist component to remove item from the array..
    //this.props.updateOrderList(this.props.details.id, action); - will be helpful once we start using redux


    //for some reason two cards are being removed on swipe when the state on orderlist is updated.
  }
    render() {
      const render = this.state.render; 
      if (render === false) return null; 
      else{
        return (
          <Swipeable onSwipedLeft={this.userSwipedLeft}>
              <div className="order-list-details-container">
                <CartItemBody {...this.props.details}/>
                <Counter/>
              </div> 
          </Swipeable>
        )
      }
      
    }
  }

 export default CartItem;
