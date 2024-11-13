import React, {Component} from 'react';
import {Page, Logo, Button} from '../common/';
import {feastLogo, policy} from '../assets/';

const policyLogoStyle = {
  marginBottom:"20px",
  height:"100px"
}

const feastLogoStyle = {
  height:"100px",
}

// handleClick = ()=>{
//    this.props.history.push('/search')
//  }
 class Policy extends Component{
   handleClick = ()=>{
      this.props.history.push('/search')
    }
   render(){
   return (
      <Page>
         <div id="container">
           <Logo src={feastLogo} alt="Feast Logo" style={feastLogoStyle}/>
            <div>
               <Logo src={policy} alt="Policy Logo" style={policyLogoStyle}/>
               <p>By tapping next, you agree to our <a href="google.com"> Terms of Use </a> and acknowledge that you have read the <a href="google.com"> Privacy Policy</a>.</p>
            </div>

            {/*TODO: add onclick function for below button */}         
            <Button
              name="Complete"
              value="Complete" type="submit"
              onClick = {this.handleClick} />
         </div>
      </Page>
   );
}
};

export default Policy;
