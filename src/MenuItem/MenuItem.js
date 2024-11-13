import React, { Component } from 'react';
import {Page, Logo, Card, RadioButtonGroup, CheckBoxGroup, NavBar, Header, Image, Button } from '../common/';
import backIcon from '../assets/back-icon-black.svg';
import '../App.css'
import './MenuItem.css';

const dish =
    {
        taste: "Spicy",
        title: "Samosa",
        price: "$12",
        description:"Bustling taqueria serving tacos, quesadillas & aguas frescas in a street style set max 99 characters",
        image: "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
        ingredients:[{"id":"in101", "name":"Potatoes"},{"id":"103", "name":"Garam Masala"},{"id":"104", "name":"Wheat Flour"},{"id":"393", "name":"Coriander"}],
        options:["salad", "fish", "chicken", "beef", "potatoes", "kale"],
        addons:["mustard","ketchup", "soy sauce", "guacamole", "salsa"]
    }

class MenuItem extends Component {
    constructor() {
        super();

        this.state = {
          item: {}
        }
      }
      componentWillMount() {
        this.setState({
            item: dish
        });
      }


    render() {
      const intFrameHeight = window.innerHeight;
      let size = intFrameHeight*(95.25/100);
      let setNewHeight = {
          height: size
      }
        return (
            <Page>
               <div className="container">
               <Header onClick={this.props.history.goBack} src={backIcon} text={this.state.item.title} secondarytext={this.state.item.price} className={"back-arrow"}/>
                  <div className="card-container" style={setNewHeight}>
                    <div label="Menu">
                       <Image src={this.state.item.image} alt={this.state.item.title} style={{ border: "1px", borderRadius: "2px"}}/>
                    </div>
                    <div className="options-container">
                       <div className="rb-group-title">
                           <h2 style={{"border-bottom":"1px rgba(151,151,151,0.19) solid"}}> Ingredients </h2>
                           <p> this is where the <span style={{"border-bottom":"2px dotted #75009E"}}>Ingredients</span>{Object.keys(this.state.item.ingredients).map(key => 
                            <span key={key} index={key}>{this.state.item.ingredients[key].name}, </span>)} </p>
                       </div>
                       <div>
                           <RadioButtonGroup type="Options" required="Required" data={this.state.item.options}/>
                       </div>
                       <div>
                           <CheckBoxGroup type="Addons" required="Required" data={this.state.item.addons}/>
                       </div>
                       <div className="rb-group-title">
                           <h2 style={{borderBottom:"1px rgba(151,151,151,0.19) solid"}}> Special Instructions </h2>
                        </div>
                        <textarea></textarea>
                    </div>
                  </div>
               </div>
                  <footer>
                    {/*<NavBar/>*/}
                    <Button
                      name="Order List"
                      value="Add To Order List" type="submit"
                      className= "button"
                      onClick = {this.handleClick} />
                  </footer>
            </Page>
        )
    }
}

export default MenuItem;
