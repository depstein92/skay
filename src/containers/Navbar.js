import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss'; /*need to fix webpack*/

class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.state = { visible: false };
  }

  render(){
    return (
<div className="home-navbar">
  <span id="home-link-item">
    <Link to="/about">
      About
    </Link>
  </span>
  <span id="home-link-item">
    <Link to="/about">
     Home
    </Link>
  </span>
   <span id="home-link-item">
    <Link to="/about">
     Blog
    </Link>
   </span>
 </div>
    )
  }
}
 export default Navbar;
