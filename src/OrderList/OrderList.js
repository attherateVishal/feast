import React, { Component } from 'react';
import {Page, Header, Button,  } from '../common/';
import backIcon from '../assets/back-icon-black.svg';
import '../App.css'
import './OrderList.css';
import CartItem from  './CartItem';

const dish =[
    { 
      id: "1",
      name: "Carbon Special Tacos",
      description:"Bustling taqueria serving tacos, quesadillas & aguas frescas in a street style set max 99 characters",
      image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      options: "Chicken, Wheat Tortilla, Tomato, Mild Salsa, Guacamole",
      addons: "Chips, Soft Drink, Soup",
      instructions: "Make sure the tacos are stuffed well.",
      price: 10,
      count: 0
    },
    { 
      id: "2",
      name: "Burrito Meal",
      description:"Large flour tortilla filled with meat of your choice, refried beans, lettuce, tomato and sour cream.",
      image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      options: "Chicken, Wheat Tortilla, Tomato, Mild Salsa, Guacamole",
      addons: "Chips, Horchata, Velvet Cake",
      instructions: "",
      price: 15,
      count:0
    },
    { 
      id: "5",
      name: "Some Salad",
      description:"A bowl of fresh greens with protein and dressing of your choice.",
      image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      options: "Chicken, Beef, Fish, Chickpeas",
      addons: "Dressing One, Dressing Two",
      instructions: "",
      price: 35,
      count:0
    },
    { 
      id: "6",
      name: "Freshii Special Wrap",
      description:"A wrap of romaine, blue cheese, cherry tomatoes, carrots, celery, greek yogurt ranch, buffalo sauce",
      image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      options: "Chicken, Steak, Salmon, Tofu, Falafal",
      addons: "Balsamic Vinaigrette, Lemon Juice",
      instructions: "",
      price: 25,
      count:0
    },
    { 
      id: "7",
      name: "Mediterranean Salad Bowl",
      description:"A bowl of rquinoa & field greens, feta cheese, kalamata olives, almonds, red onions, cucumber, roasted red peppers, tomatoes, cilantro, red pepper sauce",
      image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      options: "Chicken, Steak, Salmon, Tofu, Falafal",
      addons: "Balsamic Vinaigrette, Lemon Juice, Mustard, Buffalo Ranch",
      instructions: "",
      price: 45,
      count:0
    },
  
  ]

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      items: dish,
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     items: dish
  //   });
  // }

  handleRemoveItem = (id) => {
      console.log("remove from array id -  " + id);
      
        var updatedItems = this.state.items; // make a separate copy of the array
        updatedItems.splice(updatedItems.findIndex(item => item.id === id), 1);
        
        console.log(updatedItems);

        /*** set state is not working or incorrectly. for some reason two cards are being removed on swipe when the state on orderlist is updated.find out why? */
        this.setState({
          items: updatedItems
        });
  }

  render() {
    const intFrameHeight = window.innerHeight;
    let size = intFrameHeight*(95.25/100);
    let setNewHeight = {
        height: size
    }

    const intFrameWidth = window.innerWidth;

    let sizeImageGWidth = intFrameWidth*(25/100);
    let setNewImageGWidth = {
        width: sizeImageGWidth
    }
  return (
    <Page>
      <div className="container">
        <Header onClick={this.props.history.goBack} src={backIcon} text="ORDER LIST" className={"back-arrow"}/>
          <div className="card-container" style={setNewHeight}>
            {
              Object
                .keys(this.state.items)
                .map(key => 
                  <CartItem key={key} index={key} details={this.state.items[key]}removeItem = {this.handleRemoveItem}/>) 
              }
            
            {/* <div className="offers-description" style={{"border-bottom":"1px rgba(151,151,151,0.19) solid", "margin":".5em 0"}}>
              </div>  this is the divider line for lists, it can be made a separate component */}

          </div>
        </div>
          <footer>
            <Button
              name="Show the Wait Staff"
              value="Show To Wait Staff" type="submit"
              className= "button"
              onClick = {this.handleClick} />
          </footer>
    </Page>
      )
  }
}

export default OrderList;
