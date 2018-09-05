import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Link} from 'react-router-dom' 
import Route from 'react-router-dom/Route'
import {Form} from './form'
import {AppWrapper} from'./app.js'


export const Navbar=()=>{
  return (
  
      <nav style={{ backgroundColor: "red" }}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo ">Logo</a>
          <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/" exact="true">Home</Link></li>
              <li><Link to="/checkout" exact="true">SignUp/SignIn</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}