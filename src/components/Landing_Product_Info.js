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
    autoplay: true, /* set to true */
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
         <span>Dont miss out on Gorgeous Sales!
         <ul className="second-item">
          <li>20% off products until 09/0/18 </li>
          <li>Includes Luxury Brands</li>
          <li>Includes Skay Brands</li>
         </ul>
         </span>
        </div>
        <div>
         <span>
         <div className="dont-miss-message">
         Dont Miss Out on Our Brands!
         </div>
         <div className="third">
          <div className="firstItem">
           <img
            src='https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887'/>
             <div className="style-type">Luxury Style</div>
             <div className="brand-name">Beautiful Blue</div>
             <span className="price">$25</span>
           </div>
           <div className="secondItem">
            <img
             src='https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887'/>
              <div className="style-type">Signature Style</div>
              <div className="brand-name">Tropical</div>
              <span className="price">$25</span>
            </div>
            <div className="thirdItem">
             <img
              src='https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887'/>
               <div className="style-type">Luxury Style</div>
               <div className="brand-name">Red-Beauty</div>
               <span className="price">$25</span>
             </div>
          </div>
         </span>
        </div>
      </Slider>
    </div>
  )
}

export default Landing_Product_Info;
