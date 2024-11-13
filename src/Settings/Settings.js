import React, { Component } from 'react';
import {Page, InputBox, TabsList, Button } from '../common/';
import back from '../assets/back-icon-black.svg';
import '../App.css'
import './Settings.css';

const user = {
    username:"jdoe",
    email:"jdoe@gmail.com",
}



class Settings extends Component {
    constructor() {
        super();

        this.state = {
          user :{},
          confirmPassword:'',
          newPassword:''
        }

        this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
        this.handleNewPasswordChange=this.handleNewPasswordChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
      }

      handleNewPasswordChange(event){
          //check against password policy

        this.setState(
           {newPassword:event.target.value}
        );
      }
      handleConfirmPasswordChange(event){
        //check against password policy

        this.setState(
            {confirmPassword:event.target.value}
         );

      }

      handleOnSubmit(event){
        event.preventDefault();
        alert(`Password Changed Successfully`);
      }

      componentWillMount(){
        this.setState(
            {user:user}
         );
      }

      render() {
        return (
            <Page>
                <div className="restaurant-article-offerings">
                    <header className="restaurant-header-container">
                        <div className="restaurant-header-menu-bar">
                            {/* <img src='../../assets/menuBarBlack.svg' alt="welcome-to-Feast"/>  <-back icon*/}
                        </div>
                        <div className="restaurant-header">
                            <h2 className="restaurant-header-nav-title">SETTINGS AND PRIVACY</h2>
                        </div>
                    </header>
                    <section>
                        {/* <nav className="restaurant-nav-container">
                            <div className="restaurant-nav-list">
                                <a href="#home" class="restaurant-nav-li-active restaurant-nav-list-active-border ">Settings</a>
                                <a href="#home" class="restaurant-nav-item">Privacy</a>
                                <a href="#home" class="restaurant-nav-item">Terms</a>
                            </div>
                        </nav> */}
                         <TabsList>
                            <div label="Settings">
                                <article className="settings-container">
                                <div className="settings-user-name-container">
                                    <p>USERNAME</p>
                                    <p>{this.state.user.username}</p>
                                </div>
                                <div className="settings-password-container">
                                    <p className="settings-title">Password</p>
                                    <InputBox defaultValue="Confirm Password" value = {this.state.confirmPassword} type="password" onChange={this.handleConfirmPasswordChange} />
                                    <hr/>
                                    <InputBox defaultValue="New Password" value = {this.state.newPassword} type="password" onChange={this.handleNewPasswordChange} />
                                    <hr/>
                                    <Button name="changePasswordSubmit" value="Continue" type="submit" onClick={this.handleOnSubmit}/>
                                </div>
                                </article>
                            </div>
                            <div label="Privacy">

                            </div>
                            <div label="Terms">

                            </div>
                        </TabsList>
                    </section>


                </div>
            </Page>

        )}

}

export default Settings;
