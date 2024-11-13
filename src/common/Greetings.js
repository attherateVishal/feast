import React, { Component } from 'react';

const user = {
    username:"jdoe",
    first_name:"John",
    email:"jdoe@gmail.com",
}

function getTime() {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = "Current Date= "+date;
    const currentTime = + tempDate.getHours();
    return currentTime;
}

function meal(){
    var currentTime = getTime()

    if(currentTime){
        if(currentTime>=6 && currentTime<11){
            return "Discover best breakfast near you"
        }
        else if(currentTime>=11&&currentTime<15){
            return "Find lunch deals near you"
        }
        else if(currentTime>=15&&currentTime<23){
            return "Have a nice dinner with your family"
        }
    }
}

function greeting(){
    var currentTime = getTime()

    if(currentTime){
        if(currentTime>=6 && currentTime<11){
            return "Morning"
        }
        else if(currentTime>=11&&currentTime<15){
            return "Afternoon"
        }
        else if(currentTime>=15&&currentTime<23){
            return "Evening"
        }
    }
}

class Greetings extends Component {
    constructor() {
        super();
        
        this.state = {
          time: '',
          name:'',
          meal:''
        }
      }
      componentWillMount() {
        this.setState({
            time:greeting(),
            name:user.first_name,
            meal:meal()
        });
      }


    render() {
      return (
            <div>
                <p>Good {this.state.time}, {this.state.name}</p>
                <p>{this.state.meal}</p>
            </div>
      )
    }
  }

  export default Greetings;