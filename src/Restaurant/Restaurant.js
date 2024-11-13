import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Page, Button, TabsList, Logo, Card, NavBar, Header, Image } from '../common/';
import './../App.css';
import './Restaurant.css';
import '../common/Common.css';
import contact from '../assets/contact-icon.svg';
import location from '../assets/location-icon.svg';
import backIcon from '../assets/back-icon-black.svg';

const RestaurantInfo = {
    "name":"Mount Everest",
    "address":"123 Main Street, Evanston",
    "location":"https://www.google.com/maps/place/Boulevard+Sports+Lounge/@41.9099681,-87.6940662,17z/data=!4m13!1m7!3m6!1s0x880fd2a43cf19179:0xe837f2fea53e1c9c!2s2557+W+North+Ave,+Chicago,+IL+60647!3b1!8m2!3d41.9099681!4d-87.6918775!3m4!1s0x880fd2a6bfe7923f:0x45458a58beb5cb0e!8m2!3d41.9100163!4d-87.6938581",
    "contact":"tel:313-424-5294",
    "restaurantbio":"Bustling taqueria serving tacos, quesadillas & aguas frescas in a street style set max 99 characters Bustling taqueria serving tacos, quesadillas & aguas frescas in a street style set max 99 characters Bustling taqueria serving tacos, quesadillas & aguas frescas in a street style set max 99 characters"
}


const MenuItems = [
    {
      "id":"1",
      "taste": "Spicy",
      "title": "Samosa",
      "price": "$12",
      "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      "description":"The samosa is made with all-purpose flour and potatoes."
    },
    {
     "id":"2",
     "taste": "Mild",
     "title": "Spicy Tacos",
     "price": "$13",
     "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
     "description":"Tortillas filled with hot stuffing"
    },
    {
      "id":"3",
      "taste": "Sweet",
      "title": "Cookies",
      "price": "$2",
      "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
      "description":"Cookies are made with all-purpose flour and bunch of sugar"
    },
      {
         "id":"4",
        "taste": "Sour",
        "title": "Manchow Soup",
        "price": "$32",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
        "description":"Mixed vegetables and chinese sauses blend in to make this soup"
      },
      {
         "id":"5",
        "taste": "Tart",
        "title": "Spicy Tacos",
        "price": "$13",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
        "description":"Tortillas filled with hot stuffing"
      },
      {
         "id":"6",
        "taste": "Savory",
        "title": "Chowder",
        "price": "$34",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/searchImage.png",
        "description":"Made of clams, cream and other things"
      },
      {
         "id":"7",
        "taste": "Salty",
        "title": "Pizza",
        "price": "$33",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/pizza.jpg",
        "description":"Made of dough, marinara sauce and cheese"
      },
      {
         "id":"8",
        "taste": "Bitter",
        "title": "Full Breakfast",
        "price": "$13",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/breakfast.jpg",
        "description":"Two wheat toasts with selective spreads along with orange juice"
      },
      {
         "id":"9",
        "taste": "Tangy",
        "title": "Smoked Salmon",
        "price": "$43",
        "image": "https://raw.githubusercontent.com/kaustubhghadge/test/master/assets/salmon.jpg",
        "description":"Probably the healthiest dish on our menu"
      },

  ]

  const restbio = {
                "overflow": "hidden",
                "width":"60%",
                "display": "-webkit-box" ,
                "WebkitBoxOrient": "vertical",
                "WebkitLineClamp": "3"
               }
              const restbioMore = {
                
              
               }

class Restaurant extends Component {
    constructor() {
        super();
        this.state = {
          restaurant :{},
          items: {},
          name: 'RESTAURANT',
          showMore:false,
          btnText:"Show More"
        }

        this.btnClick = this.btnClick.bind(this);
      }

      // truncate(string){
      //    if (string.length > 5)
      //       return string.substring(0,75)+'...';
      //    else
      //       return string;
      // };

      resizeHeaderOnScroll() {
          const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementsByClassName("js-header");
            console.log(distanceY)
          if (distanceY > shrinkOn) {
            // headerEl.classList.add("smaller");
            console.log("anything")
            this.setState({
                name: this.state.restaurant.name
            });
          } else {
            // headerEl.classList.remove("smaller");
          }
         }

         componentDidMount() {
            window.addEventListener("scroll", this.resizeHeaderOnScroll());
         }

      componentWillMount() {
        this.setState({
            restaurant: RestaurantInfo,
          items: MenuItems
        });
      }

      handleClick = ()=>{
        this.props.history.push('/menuitem')
      }

      btnClick(){
        console.log(this.state.showMore);
        if(this.state.showMore){
                this.setState({showMore:false,btnText:"Show More"})
              }else{
                this.setState({showMore:true,btnText:"Show Less"})
               }
              }



    render() {
               const intFrameHeight = window.innerHeight;

               let size = intFrameHeight*(65/100);
               let setNewHeight = {
                  height: size
               }

               let sizeG = intFrameHeight*(10/100);
               let setNewGHeight = {
                  height: sizeG
               }

               let sizeC = intFrameHeight;
               let setNewCHeight = {
                  height: sizeC
               }


               const intFrameWidth = window.innerWidth;

               let sizeWidth = intFrameWidth*(55/100);
               let setNewWidth = {
                  width: sizeWidth
               }

               let sizeImageWidth = intFrameWidth*(40/100);
               let setNewImageWidth = {
                  width: sizeImageWidth
               }

               let sizeImageGWidth = intFrameWidth*(40/100);
               let setNewImageGWidth = {
                  width: sizeImageGWidth
               }
               


        return (
            <Page>
               <div className="container" style={setNewCHeight}>
                   <Header onClick={this.props.history.goBack} src={backIcon} text={this.state.name} className={"back-arrow"}/>
                {  // <header className="js-header" style={{"border":"1px dashed blue"}}>
                }
                      <header className="js-header">
                    <div className="rest-info-container">
                       <div className="rest-info" >
                        
                        <div>
                        <img src={"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg"} className="rest-image"/>
                        <h2> {this.state.restaurant.name}</h2>
                        <h4 className="restbio" onClick={this.btnClick} style={this.state.showMore?restbioMore:restbio}> {this.state.restaurant.restaurantbio}</h4>
                        </div>
                        
                          
                          
                          
                          <div className="rest-info-contact-container">
                             <Logo href={this.state.restaurant.contact} src={contact} alt="Contact Button"/>
                             <Logo href={this.state.restaurant.location} src={location} alt="Location Button" style={{"paddingLeft": "1.5em"}}/>
                          </div>
                       </div>
                       {// <div style={setNewImageWidth} className="rest-image-container">
                        
                       // </div>
                     }
                    </div>
                  </header>
                  <TabsList parent="true">
                      <div label="Menu">
                          <TabsList>
                              <div label="Popular">
                                 <Link to={`/menuitem`} onClick={this.handleClick} style={{ textDecoration: 'none' }}>
                                    <div className="card-container" >
                                     {
                                        Object
                                        .keys(this.state.items)
                                        .map(key => <Card key={key} index={key} details={this.state.items[key]}/>)
                                     }
                                    </div>
                                 </Link>
                              </div>
                              <div label="Starter">
                                 <p>Starters will go here</p>
                              </div>
                              <div label="Chat">
                                 <div className="card-container" style={setNewHeight}>
                                    {
                                   Object
                                   .keys(this.state.items)
                                   .map(key => <Card key={key} index={key} details={this.state.items[key]}/>)
                                   }
                                 </div>
                              </div>
                              <div label="Side">
                                  <p>Sides will go here</p>
                              </div>
                          </TabsList>
                      </div>
                      <div label="Offers">
                          <p>Coming soon..</p>
                      </div>
                      <div label="Menu Jargon Decoder">
                        <section className="offers-container">
                           <div className="offers-description">
                              <div style={setNewImageGWidth}>
                                 <Image src={"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg"} alt="Ingredient Image" className="offers-image" />
                              </div>
                              <div className="description-container" style={setNewWidth}>
                                 <div className="glossary-title">Gochujang</div>
                                 <div className="glossary-phonetic"> [go-choo-jang] </div>
                                 <div className="glossary-description"  style={setNewGHeight}> A savory, spicy, and pungent fermented Korean condiment made from red chili, glutinous rice, fermented soybeans, and salt</div>
                                 <h3> + | - </h3>
                              </div>
                           </div>
                        </section>
                        <section className="offers-container">
                           <div className="offers-description">
                              <div style={setNewImageGWidth}>
                                 <Image src={"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg"} alt="Ingredient Image" className="offers-image" />
                              </div>
                              <div className="description-container" style={setNewWidth}>
                                 <div className="glossary-title">Gochujang</div>
                                 <div className="glossary-phonetic"> [go-choo-jang] </div>
                                 <div className="glossary-description"  style={setNewGHeight}> A savory, spicy, and pungent fermented Korean condiment made from red chili, glutinous rice, fermented soybeans, and salt</div>
                                 <h3> + | - </h3>
                              </div>
                           </div>
                        </section>
                        <section className="offers-container">
                           <div className="offers-description">
                              <div style={setNewImageGWidth}>
                                 <Image src={"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg"} alt="Ingredient Image" className="offers-image" />
                              </div>
                              <div className="description-container" style={setNewWidth}>
                                 <div className="glossary-title">Gochujang</div>
                                 <div className="glossary-phonetic"> [go-choo-jang] </div>
                                 <div className="glossary-description"  style={setNewGHeight}> A savory, spicy, and pungent fermented Korean condiment made from red chili, glutinous rice, fermented soybeans, and salt</div>
                                 <h3> + | - </h3>
                              </div>
                           </div>
                        </section>
                        <section className="offers-container">
                           <div className="offers-description">
                              <div style={setNewImageGWidth}>
                                 <Image src={"https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg"} alt="Ingredient Image" className="offers-image" />
                              </div>
                              <div className="description-container" style={setNewWidth}>
                                 <div className="glossary-title">Gochujang</div>
                                 <div className="glossary-phonetic"> [go-choo-jang] </div>
                                 <div className="glossary-description"  style={setNewGHeight}> A savory, spicy, and pungent fermented Korean condiment made from red chili, glutinous rice, fermented soybeans, and salt</div>
                                 <h3> + | - </h3>
                              </div>
                           </div>
                        </section>
                      </div>
                      <div label="Other Tab">
                          <p>Coming soon..</p>
                      </div>
                  </TabsList>
               </div>
               <footer>
                  <NavBar/>
               </footer>
            </Page>
        )
    }
}

export default Restaurant;
