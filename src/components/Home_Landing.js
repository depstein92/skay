import React from 'react';
import { Link } from 'react-router-dom';
import Landing_Hero_Image from './Landing_Hero_Image';
import Landing_Product_Info from './Landing_Product_Info';
import Landing_Book_Appointment from './Landing_Book_Appointment';
import SocialMediaIcons from './Social_Media_Icons';

class Home_Landing extends React.Component{

  render(){
    return (
    <div>
     <Landing_Hero_Image />
     <Landing_Product_Info />
     <Landing_Book_Appointment />
     <SocialMediaIcons />
    </div>
    )
  }
}

export default Home_Landing;
