import React, { Component } from 'react';
import Slider from "react-slick";
import '../styles/LandingProductInfo.scss'


const Landing_Product_Info = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 360,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, /* set to true */
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ],
     appendDots: dots => (
       <div id="home-slide-dots"
        style={ {
       position: 'absolute',
       width: '50%',
       height: '0%',
       bottom: '0%',
       top: '90vh',
       left: '25vw',
       color: 'white' }
      }>
        { dots }
       </div>
     )
  };

  return (
    <div className="landing-product-info">
      <Slider {...settings}>
        <div>
         <span>Look Beautiful always...
         <ul className="first-item-description">
          <li>Same day shipping</li>
          <li>No Appointment Fees</li>
          <li>Look Flawless</li>
         </ul>
         <div className="women-image"></div>
         </span>
        </div>
        <div>
         <span>Dont miss out on Gorgeous Sales!</span>
        </div>
        <div>
         <span>Dont Miss Out on Our Brands!</span>
        </div>
      </Slider>
    </div>
  )
}

export default Landing_Product_Info;
