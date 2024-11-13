import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {SearchPageImage, MenuBarWhite, Page, NavBar, Logo, Header} from '../common/';
import './Search.css';
import searchImage from '../assets/searchImage-2.jpg';
import searchBarIcon from '../assets/searchIcon.svg';
//import {} from '../common/';
import menuBarWhite from '../assets/menuBarWhite.svg';


import Suggestions from './Suggestions';
const FEAST_API = process.env.REACT_APP_FEAST_API;
var URL = FEAST_API + "search/restaurant";
const english =  /^[a-zA-Z0-9-_]+$/;

class Search extends Component {
  state = {
    query:'',
    results: [],
    showSuggestions:false
  }
  login() {
    this.props.auth.login();
  }

  handleClick = ()=>{
    this.props.history.push('/restaurant')
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    },()=>{
      if (this.state.query && this.state.query.length > 1 && english.test(this.state.query)) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
      else{
        this.setState({
          showSuggestions:false
        })
      }
    }

  )
  }

  getInfo = () => {
    axios.post(URL,{data:this.state.query})
      .then((result) => {
        this.setState({
          results: result.data,
          showSuggestions:true
        })
      })
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Page>
         <div className="container">
            <div>
               <Header src={menuBarWhite} alt="Menu Settings" className="open-menu-button"/>
               <div className="background_image">
               <Link to={`/restaurant`} onClick={this.handleClick}> <SearchPageImage src={searchImage} alt="Search with Feast" style={{width:"100%", position: "relative", "z-index":"-1"}}/></Link>
               {/* TODO: Hamburger menu button below will inherit properties from button and styles will be passed in as props */}
               </div>
               <section className="search-bar-container">
                  <input className="search-bar" type="text" name="searchBar"  placeholder="Search For Restaurants" autoComplete="off" ref={input => this.search = input} onChange={this.handleInputChange}/>
                  <Logo src={searchBarIcon} className="search-bar-icon" alt="Search for restaurants"/>
                  { this.state.showSuggestions && <Suggestions results={this.state.results} />}
               </section>
               {/*this section will be replace with something else until further notice */}
               {/*<section className="offers-container">
                  <h1>Offers trending this week</h1>
                  <div className="offers-description">
                     <div className="offers-image-container">
                        <Image src={searchImage} alt="Search with Feast" className="offers-image" />
                     </div>
                     <div className="description-container">
                        <h2>Los Tacos</h2>
                        <p> this is where the offer will go. how many charters should it be limited to?</p>
                        <h3> Details </h3>
                     </div>
                  </div>
               </section>*/}
            </div>
         </div>
         <NavBar/>
      </Page>
    );
  }
}

export default Search;
