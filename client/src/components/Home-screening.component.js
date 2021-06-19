import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
export default class HomeScreen extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div>
        
        <div style={{backgroundColor: "indigo"}}>
        <h4 id="wish" style={{color: "gold",textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "gold",textAlign: 'center'}} > <b> GROUP 20 FINAL YEAR PROJECT RNSIT BANGALORE   </b></h4>
        <h4 id="nameoforg"  style={{color: "gold",textAlign: 'center'}} > <b> CHAR E-T  </b></h4>
    
        <div class="blink_me"> <p style={{color: "white"}} >  <br></br> <h3>One place several Use</h3>  </p></div>
        </div>
        <h3 id="aboutheading" style={{color: "darkmagenta"}}>STUDENTS</h3><br></br>
      <h5><b> ABHISHEK KUMAR </b>    -- <b>1RN17CS002</b> </h5>
      <h5><b> B C SACHIN  </b>    -- <b>1RN17CS023</b> </h5>
      <h5><b> DAKSHA KUMAR PANDEY </b>    -- <b>1RN17CS031</b> </h5>
      <h5><b> MOHAMMED ZABIULLA </b>    -- <b>1RN17CS052</b> </h5>
       <br></br>
       <h3 id="aboutheding" style={{color: "darkmagenta"}}>Guided By</h3>
       <h5><b> Dr. BHAVANISHANKAR K. </b>    -- <b>ASSISTANT  PROFFESSOR  DEPT. OF CSE RNSIT </b> </h5>
      
       <h3 id="aboutheding" style={{color: "darkmagenta"}}>ABOUT PROJECT</h3>
      
       <p  style={{color: "black"}}><b>This project is all about our charity which contain several fields of service such as medical,e commerce,visual studios,payment sector etc..</b>.</p>


      </div>
    );
  }
}
