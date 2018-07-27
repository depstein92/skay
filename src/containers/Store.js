import React, { Component } from 'react';
import SocialMediaIcons from '../components/Social_Media_Icons';
import { Link } from 'react-router-dom';
import Store_Modal from './Store_Modal';
import { getItemInfo }from '../actions/index';
import Store_Search_Modal from './Store_Search_Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import { withCookies, Cookies } from 'react-cookie';
import { lashs_data, nails_data, accessories_data } from '../store-items.json';
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

  this.renderNails = this.renderNails.bind(this);
  this.renderLashs = this.renderLashs.bind(this);
  this.renderAccessories = this.renderAccessories.bind(this);
  this.getLashsOnly = this.getLashsOnly.bind(this);
  this.getAccessoriesOnly = this.getAccessoriesOnly.bind(this);
  this.getNailsOnly = this.getNailsOnly.bind(this);
  this.getAllItems = this.getAllItems.bind(this);
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.openSearchModal = this.openSearchModal.bind(this);
  this.closeSearchModal = this.closeSearchModal.bind(this);
  this.addToCart = this.addToCart.bind(this);
  this.setCookie = this.setCookie.bind(this);
  }


getAccessoriesOnly(){
  this.setState({ getItem: 'accessories' });
}
getNailsOnly(){
  this.setState({ getItem: 'nails' });
}
getLashsOnly(){
  this.setState({ getItem: 'lashs' });
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
setCookie(info){

}
addToCart(event){
  this.props.sendItemInfo(event.target.dataset.key);
  this.setState({ itemsInCart: this.state.itemsInCart + 1 });
}

renderAccessories(){
 const accessorieInfo = accessories_data.map((obj) => {
   let { img, price, style, title, rating, description } = obj;
   let passInfo = Object.values(obj);
   return (
     <td id="cell" key={obj}>
      { this.state.isModalOpen !== false ?
        <Store_Modal closeModal={this.closeModal} item_info={obj} /> : null }
       <img
        onClick={this.openModal}
        src={img}/>
         <div>{ style }</div>
         <div>{ title }</div>
         <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
         </div>
         <span>{ price }</span>
         <button className="svg" data-key={passInfo} onClick={this.addToCart}>
            Add to Cart
         </button>
      </td>)
 })
   return accessorieInfo ;
}


renderNails(){
 const nailsInfo = nails_data.map((obj) => {
   let { img, price, style, title, rating } = obj;
   let passInfo = Object.values(obj);
   return (
     <td id="cell" key={obj}>
        { this.state.isModalOpen !== false ?
          <Store_Modal closeModal={this.closeModal} item_info={obj} /> : null }
       <img
        onClick={this.openModal}
        src={img} />
         <div>{ style }</div>
         <div>{ title }</div>
         <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
         </div>
         <span>{ price }</span>
         <button className="svg" data-key={passInfo} onClick={this.addToCart}>
           Add to Cart
        </button>
      </td>)
  })
   return nailsInfo;
  }



renderLashs(){
  const lashsInfo = lashs_data.map((obj) => {
    let { img, price, style, title, rating } = obj
    let passInfo = Object.values(obj);
   return (
 <td id="cell" key={obj}>
  { this.state.isModalOpen !== false ?
     <Store_Modal closeModal={this.closeModal} item_info={obj}  /> : null }
  <img
   onClick={this.openModal}
   src={img} />
    <div>{ style}</div>
    <div>{ title }</div>
    <div className="rating">
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
     <span>☆</span>
    </div>
    <span>{ price }</span>
     <button className="svg" data-key={passInfo} onClick={this.addToCart}>
      Add to Cart
     </button>
 </td>)
  })
   return lashsInfo;
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
       <Link to={"/checkout"}>
        <i className="fas fa-shopping-bag fa-2x"></i>
       </Link>
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
     <button onClick={this.getAccessoriesOnly}>Accessories</button>
     <button onClick={this.getLashsOnly}>Lashs</button>
     <button onClick={this.getNailsOnly}>Nails</button>
     <button onClick={this.getAllItems}>Products</button>
    </div>
  </div>
  { this.state.isSearchModalOpen !== false ?
     <Store_Search_Modal closeSearchModal={this.closeSearchModal} /> : null }
 <table className="store-table">
 <tbody>
  <tr className="row">
   { getItem === 'nails' && /*operator precedence*/
     this.renderNails() ||
     getItem === 'all' &&
     this.renderNails() }
   </tr>
   <tr className="row">
   { getItem === 'accessories' &&
     this.renderAccessories() ||
     getItem === 'all' &&
     this.renderAccessories() }
   </tr>
   <tr className="row">
   { getItem === 'lashs' &&
      this.renderLashs() ||
      getItem === 'all' &&
      this.renderLashs() }
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
    storeData: state.Store_Reducer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sendItemInfo: getItemInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
