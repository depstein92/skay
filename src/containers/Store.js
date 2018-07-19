import React, { Component } from 'react';
import SocialMediaIcons from '../components/Social_Media_Icons';
import Store_Modal from './Store_Modal';
import Store_Search_Modal from './Store_Search_Modal';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { Modal } from 'semantic-ui-react';
import '../styles/index.scss'; /*fix webpack*/
import _ from 'lodash';

class Store extends React.Component{

constructor(props){
    super(props);

  this.state = {
    loading: true,
    getItem: 'all',
    isModalOpen: false,
    isSearchModalOpen: false,
    itemsInCart: 0
  };

  this.renderBowls = this.renderBowls.bind(this);
  this.renderKnives = this.renderKnives.bind(this);
  this.renderStatues = this.renderStatues.bind(this);
  this.getKnivesOnly = this.getKnivesOnly.bind(this);
  this.getStatuesOnly = this.getStatuesOnly.bind(this);
  this.getBowlsOnly = this.getBowlsOnly.bind(this);
  this.getAllItems = this.getAllItems.bind(this);
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.openSearchModal = this.openSearchModal.bind(this);
  this.closeSearchModal = this.closeSearchModal.bind(this);
  this.addToCart = this.addToCart.bind(this);
  }



componentDidMount(){
  this.props.getBowlsImages();
  this.props.getKnivesImages();
  this.props.getStatuesImages();
}


getStatuesOnly(){
  this.setState({ getItem: 'statue' });
}
getBowlsOnly(){
  this.setState({ getItem: 'bowls' });
}
getKnivesOnly(){
  this.setState({ getItem: 'knives' });
}
getAllItems(){
  this.setState({ getItem: 'all' });
}
openModal(){
  this.setState({ isModalOpen: true });
}
closeModal(){
  this.setState({ isModalOpen: false });
}
openSearchModal(){
  this.setState({ isSearchModalOpen: true });
}
closeSearchModal(){
  this.setState({ isSearchModalOpen: false });
}
addToCart(){
  this.setState({ itemsInCart: this.state.itemsInCart + 1 });
}


/* CONNECT TO CMS: <img src={obj} id={obj} />*/
renderStatues(obj){
 let data = _.drop(obj.data, 990); /*REMOVE ON SAGA CHANGE*/

 if(data === null){
   return (<CircleLoader loading={this.state.loading} />);
  } else {

 const obj = data.map((obj) => {
   return (
      <td id="cell" key={obj}>
      { this.state.isModalOpen !== false ?
        <Store_Modal closeModal={this.closeModal} /> : null }
       <img
        onClick={this.openModal}
        src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
         <div>Signature Style</div>
         <div>Title</div>
         <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
         </div>
         <span>Statue Price</span>
         <button className="svg" onClick={this.addToCart}>
            Add to Cart
         </button>
      </td>)
 })
   return obj;
    }
 }

/* CONNECT TO CMS: <img src={obj} id={obj} />*/
renderBowls(obj){
 let data = _.drop(obj.data, 990); /*REMOVE ON SAGA CHANGE*/

 if(data === null){
   return (<CircleLoader loading={this.state.loading} />);
 } else {

 const obj = data.map((obj) => {
   return (
      <td id="cell" key={obj}>
        { this.state.isModalOpen !== false ?
          <Store_Modal closeModal={this.closeModal} /> : null }
       <img
        onClick={this.openModal}
        src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
         <div>Signature Style</div>
         <div>Title</div>
         <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
         </div>
         <span>Bowl Price</span>
         <button className="svg" onClick={this.addToCart}>
           Add to Cart
        </button>
      </td>)
  })
   return obj;
  }
}

/* CONNECT TO CMS: <img src={obj} id={obj} />*/
renderKnives(obj){
  let data = _.drop(obj.data, 990); /*REMOVE ON SAGA CHANGE*/

  if(data === null){
    return (<CircleLoader loading={this.state.loading} />);
  } else{

  const obj = data.map((obj) => {
   return (
 <td id="cell" key={obj}>
  { this.state.isModalOpen !== false ?
     <Store_Modal closeModal={this.closeModal} /> : null }
  <img
   onClick={this.openModal}
   src="https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-mink-lashes-bff_ea5c519e-e47b-42bb-81b7-b86fa6c93eb1.jpg?v=1522213887" />
    <div>Signature Style</div>
    <div>Title</div>
    <div className="rating">
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
    </div>
    <span>Knife Price</span>
     <button className="svg" onClick={this.addToCart}>
      Add to Cart
     </button>
 </td>)
  })
   return obj;
 }
}


 render(){

   const { getItem } = this.state;

   return(
<div className="store">
 <div className="store-navbar">
   <span>Skay</span>
   <ul>
     <li>Shop</li>
     <li>Home</li>
     <li>About</li>
     <li>Appointment</li>
     <li>
      <i className="fas fa-shopping-bag fa-2x"></i>
       Bag
     </li>
     <div className="items-added">
      { this.state.itemsInCart }
     </div>
   </ul>
  </div>
  <div className="store-hero-image">
    <span>
       Our Luxury Line
    </span>
    <div className="button-container">
     <i onClick={this.openSearchModal} className="fas fa-search fa-2x"></i>
     <button onClick={this.getStatuesOnly}>Mink Lashs</button>
     <button onClick={this.getKnivesOnly}>Weaves</button>
     <button onClick={this.getBowlsOnly}>Nails</button>
     <button onClick={this.getAllItems}>Products</button>
    </div>
  </div>
  { this.state.isSearchModalOpen !== false ?
     <Store_Search_Modal closeSearchModal={this.closeSearchModal} /> : null }
 <table className="store-table">
 <tbody>
  <tr className="row">
   { getItem === 'bowls' && /*operator precedence*/
     this.renderBowls(this.props.bowlsData) ||
     getItem === 'all' &&
     this.renderBowls(this.props.bowlsData) }
   </tr>
   <tr className="row">
   { getItem === 'statue' &&
     this.renderStatues(this.props.statuesData) ||
     getItem === 'all' &&
     this.renderStatues(this.props.statuesData) }
   </tr>
   <tr className="row">
   { getItem === 'knives' &&
      this.renderKnives(this.props.knivesData) ||
      getItem === 'all' &&
      this.renderKnives(this.props.knivesData) }
   </tr>
   <div className="footer">
    <SocialMediaIcons />
   </div>
  </tbody>
 </table>
</div>)
}
  }

const mapStateToProps = state => {
  return {
    knivesData: state.Knives_Reducer,
    bowlsData: state.Bowls_Reducer,
    statuesData: state.Statues_Reducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
   getBowlsImages: () => dispatch({ type: "BOWLS_API_REQUEST" }),
   getKnivesImages: () => dispatch({ type: "KNIVES_API_REQUEST" }),
   getStatuesImages: () => dispatch({ type: "STATUES_API_REQUEST" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
