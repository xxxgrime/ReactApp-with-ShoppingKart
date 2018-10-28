import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'


export const Navbar = (props) => {
  return (
    <div>
      <nav style={{ backgroundColor: "black" }}>
        <div className="nav-wrapper">
          <Link to="/" exact="true" className="brand-logo "><span>Q_Q</span></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Reset</a></li>
            
          </ul>
          <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}