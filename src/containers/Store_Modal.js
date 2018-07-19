import React, { Component } from 'react';
import { LeftArrow,
         RightArrow,
         SlideOne,
         SlideTwo,
         SlideThree } from '../components/Store_Modal_Slideshow';

class Store_Modal extends React.Component{

constructor(props){
  super(props);

  this.state = { slideCount: 1, amountInCart: 1 };
  this.nextSlide = this.nextSlide.bind(this);
  this.prevSlide = this.prevSlide.bind(this);
  this.subAmount = this.subAmount.bind(this);
  this.addAmount = this.addAmount.bind(this);
}

subAmount(){
  this.setState({ amountInCart: this.state.amountInCart - 1 });
}

addAmount(){
  this.setState({ amountInCart: this.state.amountInCart + 1 });
}

nextSlide(){
  this.setState({ slideCount: this.state.slideCount + 1 });
}
prevSlide(){
  this.setState({ slideCount: this.state.slideCount - 1 });
}

render(){
  return (
<div className="modal">
  <section className="modal-main">
   <div className="slider">
    { this.state.slideCount === 1 && <SlideOne /> }
    { this.state.slideCount === 2 && <SlideTwo /> }
    { this.state.slideCount === 3 && <SlideThree /> }
     <RightArrow nextSlide={this.nextSlide} />
     <LeftArrow prevSlide={this.prevSlide} />
  </div>
<div className="item-description">
  <div className="exit-button-modal">
   <i onClick={this.props.closeModal}
    className="fas fa-times"></i>
  </div>
 <span className="type-of-lash">Best Sellers</span>
 <span className="brand-of-lash">Luxury Style</span>
  <div className="rating">
  <div>158 Reviews</div>
   <span>☆</span>
   <span>☆</span>
   <span>☆</span>
   <span>☆</span>
   <span>☆</span>
  </div>
   <div className="shipping">
     <span> Free </span>
     <span> World Wide </span>
     <span>
     Shipping
     <i className="fas fa-truck"></i>
     </span>
   </div>
   <hr/>
   <div className="return">
     <span>60</span>
     <span>Day</span>
     <span>
     Return
     <i className="fab fa-algolia"></i>
     </span>
   </div>
  <div className="amount-in-cart">
  <span>
  { this.state.amountInCart }
  </span>
  <i onClick={this.addAmount}
     className="fas fa-plus-circle"></i>
  <i onClick={this.subAmount}
     className="fas fa-minus-circle"></i>
  </div>
  <button className="svg-modal">Add to Cart</button>
</div>
 </section>
</div>)
 }
}

export default Store_Modal;
