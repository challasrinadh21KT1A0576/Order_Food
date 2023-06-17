import React, { Component } from 'react';
import Image1 from './Image1.png';
import hlo from './Homepage.css';
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  
  render() {
    return (
      <div className="hlo">
       <img  src={Image1} width="90%"/>
       <div className="headerContainer">
          <h1>Food Website----------------</h1>
          <p>Good Food------------- </p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    )
  }
}
