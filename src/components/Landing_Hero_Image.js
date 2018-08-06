import React, { Component } from 'react';
import '../styles/LandingHeroImage.scss'

const Landing_Hero_Image = () => {
  return (
    <div className="home-landing">
     <div id="priestwork-landing">Skay</div>
     <div id="media-icons-landing">
      <button className="ui circular facebook icon button">
        <i className="facebook icon"></i>
     </button>
      <button className="ui circular twitter icon button">
        <i className="twitter icon"></i>
     </button>
      <button className="ui circular linkedin icon button">
        <i className="linkedin icon"></i>
     </button>
      <button className="ui circular google plus icon button">
        <i className="google plus icon"></i>
     </button>
       <ul className="store-navbar">
         <li>Shop</li>
         <li>About</li>
         <li>Appointment</li>
      </ul>
    </div>
   </div>
  )
}

export default Landing_Hero_Image;
