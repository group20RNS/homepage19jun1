import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
    
       
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
         Group20
        </Link>
       
        <div className="collpase navbar-collapse flexible">
          <br></br>
          <ul className="navbar-nav mr-auto">
            
            <li className="navbar-item">
              <Link to="/smovies" className="nav-link">
                SHORT MOVIES
              </Link>
            </li>
           
         
          </ul>
        </div>
      </nav>
     
    );
  }
}
