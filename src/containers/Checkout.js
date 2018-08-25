import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import SocialMediaIcons from '../components/Social_Media_Icons';
import CheckOutHeader from '../components/CheckOutHeader';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import _ from 'lodash';
import '../styles/Checkout.scss';

class Checkout extends React.Component{
  constructor(props){
    super(props)

    this.state = { quantityInputOpen: false,
                   totalItemPrice: 0,
                   trackedItems: [],
                   quantity: 0 };
    this.displayItems = this.displayItems.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.renderPayPalComponent = this.renderPayPalComponent.bind(this);
    this.determineNumberOfItems = this.determineNumberOfItems.bind(this);
    this.deleteDuplicateItems = this.deleteDuplicateItems.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.onQuantitySubmit = this.onQuantitySubmit.bind(this);
    this.trackItemQuantity = this.trackItemQuantity.bind(this);
  }


  componentDidMount(){
   this.totalPrice();
   this.trackItemQuantity();
  }

  determineNumberOfItems(){
    let { data } = this.props.itemInfo;
    let itemTitle = new Array(),
        items = new Array(),
        num = 1;

    if(!data){ return; }

    for(let i = 0; i < data.length; ++i){
     let len = data.length,
         previous = data[ (i + len-1) % len ],
         next = data[ (i + 1) % len ],
         current = data[i],
         currentTitle = current.item_3,
         prevTitle = previous.item_3;

     if(!itemTitle.includes(current.item_3)){
        if(currentTitle !== prevTitle ){
          num = 1;
          current.numOfItems = num;
          items.push(current);
          num++;
          } else{
          current.numOfItems = num;
          itemTitle.push(current.item_3);
          items.push(current);
        }
     } else{
        num++;
        current.numOfItems = num;
        items.push(current);
      }
    }
     return items;
  }

  deleteDuplicateItems(items){
    let finalArr = new Array(),
    titleTrack = new Array(),
    newArr = items.sort((a, b) => {
      return b.numOfItems - a.numOfItems;
    });

    for(let i =0; i < newArr.length; i++){
      if(!titleTrack.includes(newArr[i].item_3)){
         titleTrack.push(newArr[i].item_3);
         finalArr.push(newArr[i]);
    }
  }
  return finalArr;
}

  totalPrice(){
   let { data } = this.props.itemInfo;
   let { totalItemPrice } = this.state;

   if(!data){ return; }

   let total = data
               .map(obj => Number(obj.item_1))
               .reduce((a, b) => a + b);

   this.setState({ totalItemPrice: totalItemPrice + total });
  }


  handleQuantity(e){
   let { trackedItems, totalItemPrice } = this.state;
   let currentElemName = e.target.name,
       currentValue = e.target.value === "" ? false : parseInt(e.target.value),
       currentElemPrice = parseInt(e.target.dataset.key),
       currentQuantity = trackedItems.reduce((a, b) => a.numOfItems + b.numOfItems),
       indexOfCurrentElem = trackedItems.map((obj) => obj.item_3).indexOf(currentElemName);

    if(currentValue === false){ return; }
    if(currentValue > trackedItems[indexOfCurrentElem].numOfItems){
      this.setState({ /* Fix price calculation*/
        [e.target.name]: e.target.value,
        totalItemPrice: totalItemPrice + (currentElemPrice * currentValue)
      })
    } else{
      this.setState({
        [e.target.name]: e.target.value, /* Fix price calculation*/
        totalItemPrice: totalItemPrice - (currentElemPrice * currentValue)
      })
      debugger;
    }
  }

  onQuantitySubmit(e){ e.preventDefault(); }

  renderPayPalComponent(total){

    const onSuccess = (payment) => { console.log("The payment was succeeded!", payment) };
    const onCancel = (data) => { console.log('The payment was cancelled!', data) };
    const onError = (err) => { console.log("Error!", err) };

        let env = 'sandbox',
            currency = 'USD';

        const client = {
            sandbox: process.env.DB_PAYPAL_SANDBOX_ACCOUNT,
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
             env={env}
             client={client}
             currency={currency}
             total={total}
             onError={onError}
             onSuccess={onSuccess}
             onCancel={onCancel} />
        );
  }

  trackItemQuantity(arr){
   let { data } = this.props.itemInfo;
   let { trackedItems } = this.state;
   if(!data){ return;}
   let determineItemNumberArray = this.determineNumberOfItems(data),
       removeDuplicateArray = this.deleteDuplicateItems(determineItemNumberArray);
   this.setState({ trackedItems: trackedItems.concat(removeDuplicateArray) });

  }

  displayItems(){
    let { data } = this.props.itemInfo;

    if(!data){
      return(
        <div className="items-timed-out">
          No Items in Cart!
       </div>
      )
    }

    let determineItemNumberArray = this.determineNumberOfItems(data),
        removeDuplicateArray = this.deleteDuplicateItems(determineItemNumberArray);

    let itemArray = removeDuplicateArray.map((obj, i) => {
        return(
          <div className="checkout-item" id={i} key={obj}>
            <div className="checkout-info">
             <img
              className="item-image"
              src={ obj.item_0 } />
             <div className="item-description">
              <span className='item-name'>
                { obj.item_3 }
              </span>
              { obj.item_1 }
              <span className='item-type'>
                { obj.item_2 }
              </span>
              <span className='item-price'>
              </span>
            </div>
          </div>
          <div className="checkout-add-item">
          <form
           data-key={obj.item_1}
           name={`item_${i}`}
           id={i}
           onSubmit={this.onQuantitySubmit}>
           <input
            type="text"
            defaultValue={obj.numOfItems}
            data-key={obj.item_1}
            id={i}
            name={obj.item_3}
            onChange={this.handleQuantity}/>
            <button type="submit">
              Change Quantity
            </button>
          </form>
          </div>
        </div>
         )
    })
    return itemArray;
  }


  render(){
    let { totalItemPrice } = this.state;
    return(
    <div className="checkout-container">
      <CheckOutHeader />
      <div className="checkout-cart">
      { this.displayItems() }
      </div>
      <div className="total-price-checkout-info">
      <div className="total-price">
         Total:  ${ totalItemPrice }
      </div>
        <div className="pay-component">
          { this.renderPayPalComponent(totalItemPrice) }
        </div>
      </div>
      <SocialMediaIcons />
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
