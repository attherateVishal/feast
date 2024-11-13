import React, { Component } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Swipeable } from 'react-swipeable';
import CardBody from './CardBody';
import Notification from './Notification';
import './Common.css';

class Card extends Component {
  userSwipedLeft =()=>{
    console.log("Swipe to left detected. Item with id-" + this.props.details.id + " will be deleted");
    return(
      <ToastProvider
      autoDismissTimeout={6000}
      components={{ Toast:Notification }}
      placement="bottom-center"
    >
      ...
    </ToastProvider>
    )
  }
    render() {
      return (
        <Swipeable onSwipedLeft={this.userSwipedLeft}>
              <CardBody title={this.props.details.title} price={this.props.details.price} taste={this.props.details.taste} image={this.props.details.image} description ={this.props.details.description}/>
        </Swipeable>
      )
    }
  }

 export default Card;
