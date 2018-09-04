import React, { Component } from 'react';
import { LeftArrow,
         RightArrow,
         SlideOne,
         SlideTwo,
         SlideThree } from '../components/Store_Modal_Slideshow';
import { connect } from 'react-redux';
import { sendItemCheckout }from '../actions/index';
import { bindActionCreators } from 'redux';
import '../styles/Store.scss';

class Store_Modal extends React.Component{

constructor(props){
  super(props);

  this.state = { slideCount: 1, amountInCart: 1, itemsInCart: [] };
  this.nextSlide = this.nextSlide.bind(this);
  this.prevSlide = this.prevSlide.bind(this);
  this.subAmount = this.subAmount.bind(this);
  this.addAmount = this.addAmount.bind(this);
  this.addItemToCart = this.addItemToCart.bind(this);
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

addItemToCart(){
  let { item_info, sendItemCheckout } = this.props;
  let values = Object.values(item_info),
      arrInfo = new Array(),
      dataObj = new Object();

  for(let i = 0; i < values.length; i++){
    dataObj['item_' + i] = values[i];
  }

  // let itemName = Object.assign({
  //   item_0: values[0],
  //   item_1: values[1],
  //   item_2: values[2],
  //   item_3: values[3],
  //   item_4: values[4],
  //   item_5: values[5],
  //   item_6: values[6],
  //   item_7: values[7]
  // }, {});

  this.state.itemsInCart.push(dataObj);
  debugger;
  sendItemCheckout(this.state.itemsInCart);
}

render(){
  console.log(this.props.item_info);
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
  <button className="svg-modal"
   onClick={this.addItemToCart}>
  Add to Cart
  </button>
</div>
 </section>
</div>)
 }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({sendItemCheckout}, dispatch);
}

export default connect(null, mapDispatchToProps)(Store_Modal);
