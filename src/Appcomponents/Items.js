import React, { Component } from 'react'
import Tiffins from "./Images/tiffins.png";
import Meals from "./Images/meals.png";
import Biryani from "./Images/biryani.png";
import Desserts from "./Images/desserts.png";
import Icecreams from "./Images/icecreams.png";
import Mocktails from "./Images/mocktails.png";

export default class Items extends Component {
  render() {
    return (
      <div>
        <Tiffins/>
        <Meals/>
        <Biryani/>
        <Desserts/>
        <Icecreams/>
        <Mocktails/>
      </div>
    )
  }
}
