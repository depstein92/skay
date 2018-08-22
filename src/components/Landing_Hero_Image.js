import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingHeroImage.scss'

const Landing_Hero_Image = () => {
  return (
    <div className="home-landing">
     <div className="Skay_Logo">Skay</div>
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
        <li>
         <Link to="/shop">
           Shop
         </Link>
        </li>
         <li>
          <Link to="/appointment">
           Appointment
          </Link>
         </li>
      </ul>
    </div>
   </div>
  )
}

export default Landing_Hero_Image;
