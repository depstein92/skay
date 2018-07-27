import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component{
  constructor(props){
    super(props)

    this.state = { isNull: null }
    this.displayItemInfo = this.displayItemInfo.bind(this);
  }

  displayItemInfo(){

    return(
      <div>This is checkout</div>
    )
  }

  render(){
    console.log(this.props);
    return(
      <div>
      { this.displayItemInfo() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   itemInfo: state.Store_Reducer
  }
}

export default connect(mapStateToProps)(Checkout);
