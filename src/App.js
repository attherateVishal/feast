import React, { Component } from 'react';
import {Redirect,BrowserRouter, Route, Switch} from 'react-router-dom';
import {Button, NavBar} from './common/'
import Search from './Search/Search.js';
import Policy from './Policy/Policy.js';
import Restaurant from  './Restaurant/Restaurant';
import MenuItem from  './MenuItem/MenuItem';
import Settings from  './Settings/Settings';
import './App.css';

class App extends Component {
   constructor(props){
		super(props);

		this.state = {
		}
		this.goTo = this.goTo.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
				
	}
   goTo(route) {
      this.props.history.replace(`/${route}`)
    }
  
    login() {
      this.props.auth.login();
    }
  
    logout() {
      this.props.auth.logout();
    }
  
   render (){
      const { isAuthenticated } = this.props.auth;
      return(
            <BrowserRouter>
             <div>
               {
               !isAuthenticated() && (
                  <div className="wrapper">
                  <div className="header">
                     <img src="https://raw.githubusercontent.com/kaustubhghadge/feast.menu/master/images/splash-logo.png" alt="logo"/>
                     <p style={{color: "white", fontSize: "36px", fontWeight: "bold", paddingTop: "10px"}}>Feast</p>
                  </div>
                  <div className="middle">
                  <div style={{width:"25%", display:"inline-block"}}>
                  <Button
                     value="Login"
                     name="login"
                     type="button"
                     onClick={this.login.bind(this)}
                     />
                     </div>
                     </div>
                     </div>
                  )
                  }
                  {
              isAuthenticated() && (
                  this.props.history.push('/search')
               )
            }
            </div>
            </BrowserRouter>
      );
   }
};

export default App;
