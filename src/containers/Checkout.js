import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import '../styles/Checkout.scss';

class Checkout extends React.Component{
  constructor(props){
    super(props)

    this.state = { numOfitems: 0 }
    this.displayItems = this.displayItems.bind(this);
  }


  displayItems(){
    let { data } = this.props.itemInfo;

    if(!data){
      return(
        <div>Items Timed Out!</div>
      )
    }

    let itemArray = data.map(obj => {
        return(
          <div className="checkout-item" key={obj}>
            <div className="checkout-info">
             <img
              className="item-image"
              src={obj.item_0} />
             <span className='item-name'>
               { obj.item_3 }
             </span>
             <span className='item-type'>
               { obj.item_2 }
             </span>
             <span className='item-price'>
               { obj.item_1 }
             </span>
          </div>
        </div>
         )
    })
    return itemArray;
  }


  render(){
    console.log('this is props',this.props);
    return(
    <div className="checkout-container">
      <div className="checkout-cart">
      { this.displayItems() }
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   itemInfo: state.Store_Reducer
  }
}

export default connect(mapStateToProps, null)(Checkout);
