import React from 'react';
import Navbar from '../containers/Navbar';
import { Link } from 'react-router-dom';
import Landing_Hero_Image from './Landing_Hero_Image';
import Landing_Product_Info from './Landing_Product_Info';
import Landing_Best_Seller from './Landing_Best_Seller';
import Landing_Appointment from './Landing_Appointment';
import '../styles/index.scss';

class Home_Landing extends React.Component{

  render(){
    return (
    <div>
     <Landing_Hero_Image />
     <Landing_Product_Info />
     <Landing_Best_Seller />
     <Landing_Appointment />
    </div>
    )
  }
}

export default Home_Landing;
