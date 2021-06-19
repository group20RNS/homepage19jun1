import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

export default class ExercisesList extends Component {
  
  render() {
    return (
      <div>
       <h4> Our Recent serial works are available here , for more visit <a> <a href="https://www.instagram.com/bee_creativestudios/?fbclid=IwAR15Hjbbh3dRjzrO5tkib9TNIcXkrLp6Hm-sL-_2diNLIqeCe5XQkl38vhQ" ><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/downloads_tmkaqd.jpg" height="40px" width="40px"></img></a>
     
       <a href="https://www.facebook.com/beecreativevfx"><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/download_xf3q0k.png" height="40px" width="40px"></img></a>
      </a></h4>

     
     <ReactPlayer url= "https://www.youtube.com/watch?v=9Eydvotl_nc" controls={true} width="100%" height = "280px"/>
    
     <br></br><p><b>Wish You Happy Married Life Anna (RAJESH BHAT) </b></p>
      </div>
    );
  }
}
