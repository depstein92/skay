import React, { Component } from 'react';

export const SlideOne = () => {
 return(
 <div className="slide">
  <img src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
 </div>)
}

export const SlideTwo = () => {
 return(
 <div className="slide">
  <img src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
 </div>)
}

export const SlideThree = () => {
  return (
  <div className="slide">
   <img src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
  </div>)
}

export const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i className="fas fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  )
}

 export const LeftArrow = (props) => {
  return (
    <div onClick={props.prevSlide} className="backArrow">
      <i className="fas fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}
