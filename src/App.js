import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./Appcomponents/Sectionune";
import Navigation from './Appcomponents/Navigation';
import Homepage from './Appcomponents/Homepage';
import Sectionune from './Appcomponents/Sectionune';
import Menu from './Appcomponents/Menu';
import Product from './Appcomponents/Product';
import Update from './Appcomponents/Update';
import Login from './Appcomponents/Login';
import Loginmem from './Appcomponents/Loginmem';




export default class App extends Component {
  
  render() {
    return (
      
      <section>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/updateorders" element={<Product/>}/>
          <Route path="/updateorder" element={<Update/>}/>
          <Route path="/loginmem" element={<Loginmem/>}/>

        </Routes>     
      </BrowserRouter>
       
         
       
      </section>
    )
  }
}
