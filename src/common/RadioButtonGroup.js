import React, { Component } from 'react';
import back from '../assets/back-icon-black.svg';
import '../App.css';
import './Common.css'

class RadioButton extends Component {
    constructor() {
        super();
        this.state = {
          type:'',
          name:'',
          value:'',
          required:''
        };

        this.handleChange = this.handleChange.bind(this);
      }

    componentWillMount() {
     this.setState({
        type:this.props.type,
        name: this.props.option,
        value:this.props.index,
        required:this.props.required,
        });
    }

    handleChange(event) {
     this.setState({
          value: event.target.value
        });
        console.log(this.state.value);
    }

    render() {
      return ( <li>
        <label className="rb-container">
          <input
            type="radio"
            name={this.state.type}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span className="circle"></span>
           {this.state.name}
        </label>
      </li>)
    }
}

class RadioButtonGroup extends Component {
    constructor() {
      super();
      this.state = {
        type:"",
        data:[],
        required: ""
      };
    }

    componentWillMount() {
        this.setState({
            type: this.props.type,
            data: this.props.data,
            required: this.props.required
        });
    }

    render() {
      return (
        <form>
            <div className="rb-group-container">
               <div className="rb-group-title rb-group-flex">
                   <h2>{this.props.type}</h2>
                   <h3>{this.props.required}</h3>
               </div>
            </div>
          <ul>
            {
                Object
                 .keys(this.state.data)
                 .map(key => <RadioButton key={key} index={key} type={this.state.type} option = {this.state.data[key]}/>)
            }
          </ul>
        </form>
      );
    }
  }

  export default RadioButtonGroup
